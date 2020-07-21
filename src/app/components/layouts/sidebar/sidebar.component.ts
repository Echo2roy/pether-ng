import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  showMenu2: string;
  pushRightClass: string;
 // public loginUser:LoginUser;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(
              private authenticationservice: AuthenticationService,
              public router: Router,
            /*  public core: CoreService*/) {
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit(): void {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.showMenu2 = '';
    this.pushRightClass = 'push-right';
  }


  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  addExpandClass2(element: any) {
    if (element === this.showMenu2) {
      this.showMenu2 = '0';
    } else {
      this.showMenu2 = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  changeLang(language: string) {

  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

  onLogout(){
    this.authenticationservice.logout().then(r=>{
      localStorage.removeItem('currentUser');
      localStorage.removeItem('userPerms');
      localStorage.setItem("page","login");
      this.router.navigate(['/login']);
    }).catch(e=>{
     // this.core.handleError(e,"Logout");
    });
  }
}
