import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _loginUrl = "https://demo.openmrs.org/openmrs/ws/rest/v1/session"

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {
    return this.http.post<any>(this._loginUrl, {username, password})
  }
}
