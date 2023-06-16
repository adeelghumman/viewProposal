import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signing-proposal',
    pathMatch: 'full'
  },
  {
    path: 'signing-proposal',
    loadChildren: () => import('./views/signing-proposal/signing-proposal.module').then( m => m.SigningProposalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
