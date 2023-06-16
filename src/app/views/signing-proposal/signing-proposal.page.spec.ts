import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigningProposalPage } from './signing-proposal.page';

describe('SigningProposalPage', () => {
  let component: SigningProposalPage;
  let fixture: ComponentFixture<SigningProposalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SigningProposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
