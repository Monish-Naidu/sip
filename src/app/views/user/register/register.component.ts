import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.css', './register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  ngUsername: string;
  ngPassword: string;
  ngVerify: string;

  constructor() { }

  ngOnInit() {
  }

  register() {

  }

}
