import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';




@Injectable()

export class AdminService {
  constructor(private http: HttpClient, private router: Router) {}

  base_url = environment.baseUrl;


  findAllUsers(pageId: string) {
    const url = this.base_url + '/api/user/users';
    return this.http.get(url);
  }

  updateUser(userId: String, user) {
    const url = this.base_url + '/api/user/' + userId;
    return this.http.put(url, user);
  }

  deleteUserById(userId: String) {
    const url = this.base_url + '/api/user/' + userId;
    return this.http.delete(url);
  }
}

