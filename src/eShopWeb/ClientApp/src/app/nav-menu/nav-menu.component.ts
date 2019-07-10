import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit 
{
  public logoSrc: string = "assets/Logo/Logo.png";

  isExpanded = false;

  collapse()
  {
    this.isExpanded = false;
  }

  toggle()
  {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() 
  {
    this.onHandleNavigationToggleEvents(document.getElementById("ToggleSidebar"));
    this.onHandleNavigationToggleEvents(document.getElementById("ToggleSmallScreenMenu"));

    this.onHandleNavigationCloseEvents(document.getElementById("sidebar"));
    this.onHandleNavigationCloseEvents(document.getElementById("SmallScreenMenu"));
  }

  // === Navigation S ===
  onHandleNavigationCloseEvents(element: HTMLElement)
  {
    if(element)
    {
      element.addEventListener('click', () =>
      {
        element.classList.toggle('active');

        console.log("Using Lambdas", element);
      }, false);
    }
  }

  onHandleNavigationToggleEvents(element: HTMLElement)
  {
    if(element)
    {
      element.addEventListener('click', () =>
      {
        if(element.id === "ToggleSidebar")
        {
          document.getElementById("sidebar").classList.toggle('active');
        }
        else if(element.id === "ToggleSmallScreenMenu")
        {
          document.getElementById("SmallScreenMenu").classList.toggle('active');
        }

        console.log("Using Lambdas", element);
      }, false);
    }
  }
  // === Navigation E ===

  // === Stack Overflow S ===
  StackOverflowExamples()
  {
    var el = document.getElementById('overlayBtn');
    if(el)
    {
      el.addEventListener('click', () => { console.log("It Works!"); }, false);
    }

    //==
    document.getElementById('element').onclick = function(e)
    {
      alert('click');
    }
    //==

    //==
    var el = document.getElementById("myelement");

    el.addEventListener('click', function()
    {
      alert("Clicked");
    });

    // ... or ...

    el.onclick = function()
    {
      alert("Clicked");
    }


    //Note that the even listener style allows multiple listeners to be added whereas the callback handler style is exclusive (there can be only one).
    //If you need to add these handlers to multiple elements then you must acquire them as appropriate and add them to each one separately.

    //==
  }
  // === Stack Overflow E ===
}
