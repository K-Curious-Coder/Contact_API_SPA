import { Component, Input } from '@angular/core';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent
{
  @Input()
  public pageTitle: string = "Contact API SPA";

  bodyElementScrollTop: any = document.body.scrollTop;

  constructor()
  {
    this.bodyElementScrollTop = 0;
  }
}
