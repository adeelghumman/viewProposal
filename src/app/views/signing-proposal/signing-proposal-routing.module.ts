import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigningProposalPage } from './signing-proposal.page';

const routes: Routes = [
  {
    path: '',
    component: SigningProposalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigningProposalPageRoutingModule {}
