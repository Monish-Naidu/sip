import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.css', './control.component.css']
})
export class ControlComponent implements OnInit {
  @ViewChild('f') controlForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  deleteUser() {

  }

}
