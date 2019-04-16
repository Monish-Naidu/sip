import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.css', './checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  lat = 47.6201482;
  lng = -122.3298868;

  constructor() { }

  ngOnInit() {

  }

  onChooseLocation(event) {
    console.log(event);
  }

}


