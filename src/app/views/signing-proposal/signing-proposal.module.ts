import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SigningProposalPageRoutingModule } from './signing-proposal-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SigningProposalPage } from './signing-proposal.page';
import { SignComponentModule } from '../../components/sign-component/sign-component.module';
import { TranslateModule } from '@ngx-translate/core';
import { i18nComponentModule } from 'src/app/components/i18n/i18n.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigningProposalPageRoutingModule,
    PdfViewerModule,
    SignComponentModule,
    TranslateModule,
    i18nComponentModule
  ],
  declarations: [SigningProposalPage]
})
export class SigningProposalPageModule {}
