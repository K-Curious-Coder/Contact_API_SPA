
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SHARED_STRINGS } from '../shared/constants';

//SHARED_STRINGS

@Component({
  templateUrl: './contact-thanks.component.html'
})
export class ContactThanksComponent
{
  public pageTitle: string = "Thanks You";
  public browserTitle: string = "Contact API SPA";
  
  public projectOwner: string = SHARED_STRINGS.projectOwner;

  constructor(meta: Meta, title: Title)
  {
    // let currentBrowserTitle: string = this.browserTitle + " " + this.pageTitle;
    let currentBrowserTitle: string = this.browserTitle + " - " + this.pageTitle;
    title.setTitle(currentBrowserTitle);



    meta.addTags(
      [
        {
          name: 'author', content: 'Content owner and creator: Maurice Antonio Kelly. Software developer: Maurice Antonio Kelly'
        },
        {
          name: 'keyworgs', content: 'Software Development'
        },
        {
          name: 'description', content: 'Software Development'
        },
      ]);
  }
}
