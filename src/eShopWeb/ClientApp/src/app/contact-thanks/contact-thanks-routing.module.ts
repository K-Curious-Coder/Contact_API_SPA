import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactThanksComponent } from './contact-thanks.component';

const routes: Routes = [
  {
    path: '',
    component: ContactThanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactThanksRoutingModule { }
