import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SignaturePad from 'signature_pad';
@Component({
  selector: 'app-sign-component',
  templateUrl: './sign-component.component.html',
  styleUrls: ['./sign-component.component.scss'],
})
export class SignComponentComponent implements OnInit , AfterViewInit {
 
  @ViewChild('signaturePad', { static: false }) signaturePadElement!: ElementRef;
  signaturePad: any;
  option = 'upload'

  constructor(private _modal: ModalController) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
     this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement, {
      backgroundColor: '#ADB9BF',
     });
   }

  closeModal() {
    this._modal.dismiss();
  }

  setOption(type: string) {
    this.option = type;
    this.signaturePad.clear();
  }
  onSelect(e: any) {
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  saveSignature() {
    const signatureData = this.signaturePad.toDataURL();
  }

}
