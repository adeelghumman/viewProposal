import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { states } from './state-list';
import { environment } from 'src/environments/environment';
@NgModule({
  imports: [
    NgxsModule.forRoot([...states] , { developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
  ]
})
export class StoreModule {}