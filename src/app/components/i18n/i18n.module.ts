import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nComponent } from './i18n.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { DomSanitizerPipeModule } from 'src/app/shared/pipes/dom_sanitizer/dom-sanitizer.module';


@NgModule({
  imports: [CommonModule, FormsModule, DomSanitizerPipeModule, TranslateModule, IonicModule],
  declarations: [I18nComponent],
  exports: [I18nComponent],
})
export class i18nComponentModule {}