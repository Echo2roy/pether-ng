import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _loginUrl = "https://demo.openmrs.org/openmrs/ws/rest/v1/session"

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {
    const httOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    };
    return this.http.get<any>(this._loginUrl, httOptions);
  }
}
