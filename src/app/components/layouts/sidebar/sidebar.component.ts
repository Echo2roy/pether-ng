import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {NavigationEnd, Router} from "@angular/router";

declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() {}

    slide () {
      $('#sidebar').toggleClass('active');
    };

  ngOnInit(): void {}

}
