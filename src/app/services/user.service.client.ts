import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


// import { Observable } from 'rxjs/Observable ';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';




@Injectable()

export class UserService {
  constructor(private http: HttpClient) {
  }

}
