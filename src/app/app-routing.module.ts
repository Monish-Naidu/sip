import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';​
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from './services/auth-guard.service';
import { LoginComponent } from './views/user/login/login.component';
import {HomeComponent} from './views/homepage/home/home.component';

​const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




export const AppRouting = RouterModule.forRoot(routes, { useHash: true });
