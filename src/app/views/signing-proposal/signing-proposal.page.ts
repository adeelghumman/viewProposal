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

  initialValue: any = '<h1>Document</h2> <p>asd</p>';
  documentLoader: boolean = true;
  currentDocument: number = 1;
  constructor(private _modal: ModalController, private _service: i18nService) { }

  tinyMceConfig = {
    height: 600,
    menubar: false,
    selector: "textarea.my-editor",
    plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
  };

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

  getAllLanguages() {
    this._service.getAllLanguages();
  }

  changeLanguage(lang: language) {
    this._service.changeLanguage(lang);
  }

  selectDocument(d: any, index: any) {
    this.selectedDocument = d.documentName;
    this.currentDocument = index + 1;
    this.initialValue = '    <h1      style="padding-top: 1pt;padding-left: 5pt;text-indent: 0pt;text-align: left;"    >      Integration of Files OR Notes:    </h1>    <p style="text-indent: 0pt;text-align: left;"><br /></p>    <h1 style="padding-left: 5pt;text-indent: 0pt;text-align: left;">      For File:    </h1>    <ol id="l1">      <li data-list-text="1-">        <p          class="s1"          style="padding-top: 9pt;padding-left: 41pt;text-indent: -18pt;text-align: left;"        >          add “FilesComponentModule” on your module file.        </p>      </li>      <li data-list-text="2-">        <p          class="s1"          style="padding-top: 1pt;padding-bottom: 3pt;padding-left: 41pt;text-indent: -18pt;text-align: left;"        >          add        </p>      </li>    </ol>    <p      class="s4"      style="padding-left: 1pt;text-indent: 0pt;line-height: 12pt;text-align: left;"    >      <span style=" color: #808080;">&lt;</span      ><span style=" color: #559CD5;">app-files </span>[moduleEntityId]<span        style=" color: #D3D3D3;"        >=</span      ><span style=" color: #CE9178;">&quot;</span>id<span        style=" color: #CE9178;"        >&quot; </span      >[moduleName]<span style=" color: #D3D3D3;">=</span      ><span style=" color: #CE9178;">&quot;&#39;third-party&#39;&quot; </span      ><span style=" color: #808080;">&gt;&lt;/</span      ><span style=" color: #559CD5;">app-</span>    </p>    <p      class="s3"      style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;"    >      files<span style=" color: #808080;">&gt;</span>    </p>    <p style="padding-left: 39pt;text-indent: 0pt;text-align: left;" />    <p      style="padding-left: 41pt;text-indent: 0pt;line-height: 11pt;text-align: left;"    >      moduleEntityId = is the Id of entity    </p>    <p      style="padding-top: 8pt;padding-left: 41pt;text-indent: 0pt;text-align: left;"    >      moduleName = is the module name in which u want to integrate that;    </p>    <p style="text-indent: 0pt;text-align: left;"><br /></p>    <h1      style="padding-top: 6pt;padding-left: 5pt;text-indent: 0pt;text-align: left;"    >      For Notes:    </h1>    <ol id="l2">      <li data-list-text="1-">        <p          class="s1"          style="padding-top: 9pt;padding-left: 41pt;text-indent: -18pt;text-align: left;"        >          add “NotesComponentModule” on your module file.        </p>      </li>      <li data-list-text="2-">        <p          class="s1"          style="padding-top: 1pt;padding-bottom: 3pt;padding-left: 41pt;text-indent: -18pt;text-align: left;"        >          add        </p>      </li>    </ol>    <p      class="s4"      style="padding-left: 1pt;text-indent: 0pt;line-height: 12pt;text-align: left;"    >      <span style=" color: #D3D3D3;">3- </span      ><span style=" color: #808080;">&lt;</span      ><span style=" color: #559CD5;">app-notes </span>[moduleEntityId]<span        style=" color: #D3D3D3;"        >=</span      ><span style=" color: #CE9178;">&quot;</span>id<span        style=" color: #CE9178;"        >&quot; </span      >[moduleName]<span style=" color: #D3D3D3;">=</span      ><span style=" color: #CE9178;">&quot;&#39;third-party&#39;&quot;</span      ><span style=" color: #808080;">&gt;&lt;/</span      ><span style=" color: #559CD5;">app-</span>    </p>    <p      class="s3"      style="padding-top: 1pt;padding-left: 19pt;text-indent: 0pt;text-align: left;"    >      notes<span style=" color: #808080;">&gt;</span>    </p>    <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;" />    <p      style="padding-left: 41pt;text-indent: 0pt;line-height: 11pt;text-align: left;"    >      moduleEntityId = is the Id of entity    </p>    <p      style="padding-top: 8pt;padding-left: 41pt;text-indent: 0pt;text-align: left;"    >      moduleName = is the module name in which u want to integrate that;    </p>    <p style="text-indent: 0pt;text-align: left;"><br /></p>    <p class="s7" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">      Attention:    </p>    <p style="text-indent: 0pt;text-align: left;"><br /></p>    <p      class="s7"      style="padding-top: 3pt;padding-left: 41pt;text-indent: 0pt;text-align: left;"    >      Kindly double check your module name with the names in COSMOS MODULE    </p>    <p class="s7" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">      table.    </p>'
  }

}
