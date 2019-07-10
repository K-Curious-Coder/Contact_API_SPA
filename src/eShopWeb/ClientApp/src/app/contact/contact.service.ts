import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Contact } from "./contact";

@Injectable()
export class ContactService
{
  private url = "https://localhost:44300/api/Contact";

  constructor(private http: HttpClient) { }

  getContacts_(): Observable<Contact[]>
  {
    return this.http.get(this.url)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleErrors));
  }

  getContacts(): Observable<Contact[]>
  {
    return this.http.get(this.url)
    .pipe(map(this.extractData), catchError(this.handleErrors));
  }

  addContact(contact: Contact): Observable<Contact>
  {
    let httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return this.http.post<Contact>(this.url, contact, httpOptions);
  }

  private extractData(res: Response)
  {
    return res;
  }

  private handleErrors(error: any): Observable<any>
  {
    let errors: string[] = [];

    switch(error.status)
    {
      case 400:
        let err = error.json();
        if(err.modelState)
        {
          let valErrors = error.json().modelState;
          for(var key in valErrors)
          {
            for(var i = 0; i < valErrors[key].length; i++)
            {
              errors.push(valErrors[key][i]);
            }
          }
        }
        else if(err.message)
        {
          errors.push(err.message);
        }
        else
        {
          errors.push("An Unknown error occurred.");
        }
        break;

      case 404:
        errors.push("No Contact Data Is Available.");
        break;

      case 500:
        errors.push(error.json().exceptionMessage);
        break;

      default:
        errors.push("Status: " + error.status
          + " - Error Message: "
          + error.statusText);
        break;
    };

    console.error('An error occurred', errors);

    return Observable.throw(errors);
  }
}
