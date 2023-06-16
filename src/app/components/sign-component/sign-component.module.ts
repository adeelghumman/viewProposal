import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SignComponentComponent } from './sign-component.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgxDropzoneModule,
    TranslateModule
  ],
  declarations: [SignComponentComponent],
  exports: [SignComponentComponent]
})
export class SignComponentModule { }
