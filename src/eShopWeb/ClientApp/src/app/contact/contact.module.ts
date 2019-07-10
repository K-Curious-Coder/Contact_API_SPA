import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactService } from "./contact.service";

import { SiteHeaderModule } from '../site-header/site-header.module';
//import { SiteFooterModule } from '../site-footer/site-footer.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    ContactRoutingModule,
    SiteHeaderModule
    //SiteFooterModule
  ],
  declarations: [ContactComponent],
  providers: [ContactService],
})
export class ContactModule { }
