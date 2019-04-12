import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';​
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from './services/auth-guard.service';

import { LoginComponent } from './views/user/login/login.component';​

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const appRouting: Routes = [​

{ path: 'login', component: LoginComponent}

];​

export const AppRouting = RouterModule.forRoot(appRouting, { useHash: true });
