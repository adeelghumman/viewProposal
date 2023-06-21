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
  imagesrc = ''

  constructor(private _modal: ModalController) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
     this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement, {
      backgroundColor: '#ADB9BF',
     });
   }

  closeModal() {
    const signatureData = this.signaturePad.toDataURL("image/jpeg");
    this._modal.dismiss(signatureData, 'save');
  }

  setOption(type: string) {
    this.option = type;
    this.signaturePad.clear();
  }
  onSelect(e: any) {
    console.log(e.addedFiles[0]);
    this._modal.dismiss(e.addedFiles[0], 'save');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  saveSignature() {
    const signatureData = this.signaturePad.toDataURL();
  }

}
