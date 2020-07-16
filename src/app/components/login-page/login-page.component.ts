import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
   username: string;
   password: string;

  constructor(
    private router: Router,
    private _auth: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("This is login data: ")
    console.log(this.username, this.password);
    this._auth.loginUser(this.username, this.password)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
