import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SignaturePad from 'signature_pad';
import { SignComponentComponent } from '../../components/sign-component/sign-component.component';
import { i18nService } from 'src/app/shared/services/i18n/i18n.service';
import { language } from 'src/app/shared/store/i18n/i18n.model';
import { obj } from '../signing-proposal/data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signing-proposal',
  templateUrl: './signing-proposal.page.html',
  styleUrls: ['./signing-proposal.page.scss'],
})
export class SigningProposalPage implements OnInit, AfterViewInit {

  documentLoader: boolean = true;
  currentDocument: number = 1;
  signUrl: string = ''
  initialValue: string = ''

  constructor(private _modal: ModalController, private _service: i18nService, private renderer: Renderer2, private elementRef: ElementRef) {
  }

  tinyMceConfig = {
    menubar: false,
    disabled: true,
  };

  documentDetails: any = []
  selectedDocument: any = '';
  tinyMceApiKey: string = '';

  ngOnInit() {
    this.documentDetails = obj;
    this.tinyMceApiKey = environment.tinyMce.apiKey;
    this.selectedDocument = this.documentDetails[0].documentName;
    setTimeout(() => {
      this.documentLoader = false;
    }, 1000);
  }

  ngAfterViewInit() {
    this.initialValue = this.documentDetails[0].htmlValue;
  }

  async addSign() {
    const m = await this._modal.create({
      component: SignComponentComponent,
      animated: true,
      backdropDismiss: false,
      cssClass: 'signingModal'
    });
    await m.present();

    m.onDidDismiss().then((Role) => {

      console.log(Role.data);
      
      if (Role.role === 'save') {
        this.signUrl = Role.data;
      }
    })
  }

  getAllLanguages() {
    this._service.getAllLanguages();
  }

  changeLanguage(lang: language) {
    this._service.changeLanguage(lang);
  }

  selectDocument(d: any, index: any) {
    this.documentLoader = true;
    this.selectedDocument = d.documentName;

    setTimeout(() => {
      this.currentDocument = index + 1;
      this.initialValue = this.documentDetails[index].htmlValue;
      this.documentLoader = false;
      this.signUrl ='';
    }, 1000);
  }

}
