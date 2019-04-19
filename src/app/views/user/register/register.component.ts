import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: User;
  verifyPassword: string;

  userErrorFlag: boolean;
  userErrorMsg: string;
  pwErrorFlag: boolean;
  pwErrorMsg: string;
  error: string;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  register() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;

    this.userErrorFlag = false;

    this.pwErrorFlag = this.user.password !== this.verifyPassword; // true or false depending if they are equal

    this.userService.register(this.user.username, this.user.password).subscribe((newUser: any) => {
        alert('Successful registration');
        this.sharedService.user = newUser;
        this.router.navigate(['/user']);
        console.log('checking new user created at registration');
        console.log(newUser);
      },
      (error: any) => {
        this.error = error._body;
      });
  }



  cancel() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.userErrorMsg = 'username exists';
    this.pwErrorMsg = 'passwords dont match';

    this.user = new User(undefined, undefined, undefined, undefined, undefined, undefined);
  }

}
