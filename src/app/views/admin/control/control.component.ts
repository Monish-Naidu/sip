import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../../services/admin.service.client';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.css', './control.component.css']
})
export class ControlComponent implements OnInit {
  @ViewChild('f') controlForm: NgForm;
  users: User[] = [];


  constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.findAllUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });

  }

  deleteUser() {

  }

}
