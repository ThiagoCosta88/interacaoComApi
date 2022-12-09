import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './vews/home/home.component';
import { LoginComponent } from './vews/login/login.component';

const routes: Routes = [
  {path:"", component: HomeComponent}, 
  {path:"login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
