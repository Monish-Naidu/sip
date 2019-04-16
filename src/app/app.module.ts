import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { ControlComponent } from './views/admin/control/control.component';
import {HomeComponent} from './views/homepage/home/home.component';
import {StorefrontComponent} from './views/store/storefront/storefront.component';
import {FormsModule} from '@angular/forms';
import { CheckoutComponent } from './views/store/checkout/checkout.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service.client';
import {SharedService} from './services/shared.service';
import {AuthGuard} from './services/auth-guard.service';
import {AdminService} from './services/admin.service.client';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ControlComponent,
    HomeComponent,
    StorefrontComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChxSO7vTaM5GUq_OdDIHVa6nTn6MXnmU4'
    })
  ],
  providers: [UserService, SharedService, AuthGuard, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
