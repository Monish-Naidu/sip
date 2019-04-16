import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  username: string;
  user = new User(undefined, undefined, undefined, undefined, undefined, undefined);
  userId: string;

  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  logout() {
    this.userService.logout().subscribe((data: any) => {
      console.log('inside logout');
      this.router.navigate(['/login']);
      this.sharedService.user = null;
    });
  }

  update() {
    this.userService.updateUser(this.userId, this.user).subscribe((data: any) => {
        this.user = data;
      },
      (error: any) => {
        alert('update failed');
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log('profile component: ' + params);
        this.userId = params.userId;
        console.log('user id:' + this.userId);
      });

    this.userService.findUserById(this.userId)
      .subscribe((user: User) => {
        this.user = user;
      });
    this.username = this.user.username;
  }



}
