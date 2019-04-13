import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.css' , './login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  errorFlag2: boolean;
  errorMsg2 = 'Please enter all the fields!';

  constructor(private router: Router) {
    this.errorFlag = false;
    this.errorFlag2 = false;
  }

  ngOnInit() {}

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // this.userService.findUserByCredentials(this.username, this.password).subscribe(
    //   (user: any) => {
    //     if (user) {
    //       this.router.navigate(['/user', user._id]);
    //     } else {
    //       this.errorFlag = true;
    //     }
    //   }
    // );
  }

}
