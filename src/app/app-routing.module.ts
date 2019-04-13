import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';​
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from './services/auth-guard.service';
import { LoginComponent } from './views/user/login/login.component';
import {HomeComponent} from './views/homepage/home/home.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {StorefrontComponent} from './views/store/storefront/storefront.component';

​const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: StorefrontComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




export const AppRouting = RouterModule.forRoot(routes, { useHash: true });
