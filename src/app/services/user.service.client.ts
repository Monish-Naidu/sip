import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';



@Injectable()

export class UserService {
  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) {}

  base_url = environment.baseUrl;


  login(username: String, password: String) {

    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.base_url + '/api/login', body, {withCredentials: true});
  }

  logout() {
    return this.http.post(this.base_url + '/api/logout', '', {withCredentials: true});
  }

  register(username: String, password: String) {
    const user = {
      username : username,
      password : password
    };
    return this.http.post(this.base_url + '/api/register', user, {withCredentials: true});
  }

  loggedIn() {
    return this.http.post(this.base_url + '/api/loggedIn', '', {withCredentials: true})
      .pipe(
        map(
          (user: any) => {
            if (user !== 0) {
              this.sharedService.user = user;
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        )
      );
  }

  createUser(user: User) {
    const url = this.base_url + '/api/user/';
    return this.http.post(url, user);
  }




  findUserByUsername(username: String) {
    return this.http.get(this.base_url + '/api/user?username=' + username);
  }



  findUserByCredentials(username, password) {
    const url = this.base_url + '/api/user?username=' + username + '&password=' + password;
    console.log(url);
    return this.http.get(url);
  }



  findUserById(userId) {
    const url = this.base_url + '/api/user/' + userId;
    return this.http.get(url);
  }

  updateUser(userId: String, user) {
    const url = this.base_url + '/api/user/' + userId;
    return this.http.put(url, user);
  }


}

