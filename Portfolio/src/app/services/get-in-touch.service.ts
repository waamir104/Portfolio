import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactRequest } from '../models/contact-request.model';

@Injectable({
  providedIn: 'root'
})
export class GetInTouchService {

  constructor( private _httpClient: HttpClient ) { }

  emailServerUrlBase: string = "http://email-server.waamirdev.com/";

  public registerContactRequest( details: ContactRequest ) {
    return this._httpClient.post(this.emailServerUrlBase + "api/email/send", details, { observe: 'response'});
  }
}
