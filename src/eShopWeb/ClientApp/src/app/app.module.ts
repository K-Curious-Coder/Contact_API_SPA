
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { SiteHeaderModule } from './site-header/site-header.module';
//import { SiteFooterModule } from './site-footer/site-footer.module';

@NgModule({
  declarations:
    [
      AppComponent,
      NavMenuComponent,
      
      HomeComponent
    ],
  imports:
    [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      FormsModule,
      AppRoutingModule,

      SiteHeaderModule
      //SiteFooterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
