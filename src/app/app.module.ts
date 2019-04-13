import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { LocationComponent } from './views/website/location/location.component';
import { ControlComponent } from './views/admin/control/control.component';
import {HomeComponent} from './views/homepage/home/home.component';
import {FormsModule} from '@angular/forms';
import { StorefrontComponent } from './views/store/storefront/storefront.component';
import { CartComponent } from './views/store/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LocationComponent,
    ControlComponent,
    HomeComponent,
    StorefrontComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
