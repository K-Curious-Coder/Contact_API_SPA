import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router, Params } from '@angular/router';

import { Location } from '@angular/common';

import { ContactService } from "./contact.service";
import { Contact } from "./contact";

import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: "./contact.component.html"
})
export class ContactComponent implements OnInit
{
  public emailPattern = "^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$";

  public contact: Contact | undefined;

  messages: string[] = [];
  
  public pageTitle: string = "Contact Us";
  public browserTitle: string = "Contact API SPA - ";

  constructor(private contactService: ContactService, private route: ActivatedRoute, private location: Location, meta: Meta, title: Title, private router: Router)
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

  ngOnInit()
  {
    this.contact = new Contact();
  }

  goBack()
  {
    this.location.back();
  }

  goContactThanksPage()
  {
    this.router.navigateByUrl('/contact-thanks')
  }

  private addContact(contact: Contact)
  {
    this.contactService.addContact(contact).subscribe(() => this.goContactThanksPage(), errors => this.handleErrors(errors));
  }

  saveContact()
  {
    if(this.contact)
    {
      this.addContact(this.contact);
    }
  }

  private handleErrors(errors: any)
  {
    this.messages = [];

    for(let msg of errors)
    {
      this.messages.push(msg);
    }
  }
}
