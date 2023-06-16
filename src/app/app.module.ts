import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { StoreModule } from './shared/store/store.module';
import { TranslateHttpLoaderService } from './shared/services/i18n/i18n.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      StoreModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (getTranslateLoader),
            deps: [HttpClient]
        }
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function getTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoaderService(http);
}
