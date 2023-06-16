import { NgModule } from '@angular/core';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';

@NgModule({
  imports: [],
  declarations: [DomSanitizerPipe],
  exports: [DomSanitizerPipe],
})
export class DomSanitizerPipeModule {}