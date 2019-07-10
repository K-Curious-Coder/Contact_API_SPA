
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent
{
  public pageTitle: string = 'Home';
  public browserTitle: string = "Contact API SPA - ";
  
  constructor(meta: Meta, title: Title)
  {
    let currentBrowserTitle: string = this.browserTitle + " " + this.pageTitle;
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
