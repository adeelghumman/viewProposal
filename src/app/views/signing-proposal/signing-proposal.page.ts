import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SignaturePad from 'signature_pad';
import { SignComponentComponent } from '../../components/sign-component/sign-component.component';
import { i18nService } from 'src/app/shared/services/i18n/i18n.service';
import { language } from 'src/app/shared/store/i18n/i18n.model';

@Component({
  selector: 'app-signing-proposal',
  templateUrl: './signing-proposal.page.html',
  styleUrls: ['./signing-proposal.page.scss'],
})
export class SigningProposalPage implements OnInit {

  documentLoader: boolean = true;
  currentDocument: number = 1;
  constructor(private _modal: ModalController, private _service: i18nService) { }

  documentDetails: any = [{
    documentName: 'document 1.pdf',
  }, {
    documentName: 'document 2.txt',
  }, {
    documentName: 'document 3.xls',
  }, {
    documentName: 'document 4.pdf',
  }]
  selectedDocument: any = 'document 1.pdf';

  ngOnInit() {
    setTimeout(() => {
      this.documentLoader = false;
    }, 2000);
  }

  async addSign() {
    const m = await this._modal.create({
      component: SignComponentComponent,
      animated: true,
      backdropDismiss: false,
      cssClass: 'signingModal'
    });
    await m.present();
  }

  getAllLanguages(){
    this._service.getAllLanguages();
  }

  changeLanguage(lang: language){
    this._service.changeLanguage(lang);
  }

  selectDocument(d: any, index: any) {
    this.selectedDocument = d.documentName;
    this.currentDocument = index + 1;
  }


}
