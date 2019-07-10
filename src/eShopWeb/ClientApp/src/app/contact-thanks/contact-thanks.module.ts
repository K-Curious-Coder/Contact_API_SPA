import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactThanksRoutingModule } from './contact-thanks-routing.module';
import { ContactThanksComponent } from './contact-thanks.component';

import { SiteHeaderModule } from '../site-header/site-header.module';
//import { SiteFooterModule } from '../site-footer/site-footer.module';

@NgModule({
  imports: [
    CommonModule,
    ContactThanksRoutingModule,
    SiteHeaderModule
    //SiteFooterModule
  ],
  declarations: [ContactThanksComponent]
})
export class ContactThanksModule { }
