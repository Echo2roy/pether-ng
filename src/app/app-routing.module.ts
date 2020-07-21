import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {SidebarComponent} from "./components/layouts/sidebar/sidebar.component";
import {HeaderComponent} from "./components/layouts/header/header.component";


const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
