import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';​
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from './services/auth-guard.service';

import { LoginComponent } from './views/user/login/login.component';
import {HomeComponent} from './views/homepage/home/home.component';
import {RegisterComponent} from './views/user/register/register.component';


​

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const appRouting: Routes = [​
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent}
];​

export const AppRouting = RouterModule.forRoot(appRouting, { useHash: true });
