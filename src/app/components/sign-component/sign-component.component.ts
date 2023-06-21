import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SignaturePad from 'signature_pad';
@Component({
  selector: 'app-sign-component',
  templateUrl: './sign-component.component.html',
  styleUrls: ['./sign-component.component.scss'],
})
export class SignComponentComponent implements OnInit, AfterViewInit {

  @ViewChild('signaturePad', { static: false }) signaturePadElement!: ElementRef;
  signaturePad: any;
  option = 'upload';
  imagesrc = '';
  errorMessage: string = '';

  constructor(private _modal: ModalController) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
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
    const file = e.addedFiles[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    this.errorMessage = '';

    if (!allowedTypes.includes(file.type)) {
      this.errorMessage = 'Invalid file type. Please select an image (JPEG, PNG, or GIF).';
    } else {
      this._modal.dismiss(URL.createObjectURL(e.addedFiles[0]), 'save');
    }
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  saveSignature() {
    const signatureData = this.signaturePad.toDataURL();
  }

}
