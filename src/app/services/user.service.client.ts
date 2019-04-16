import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {SharedService} from './shared.service';


@Injectable()
export class UserService {
  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) {}



  baseUrl = environment.baseUrl;


  login(username: string, password: string) {

    const body = {
      username,
      password
    };
    return this.http.post(this.baseUrl + '/api/login', body, {withCredentials: true});
  }

  logout() {
    console.log('got to logout in user.service.client');
    return this.http.post(this.baseUrl + '/api/logout', '', {withCredentials: true});
  }

  register(username: string, password: string) {


    const user = {
     username,
    password
    };
    return this.http.post(this.baseUrl + '/api/register', user, {withCredentials: true});
  }

  loggedIn() {
    return this.http.post(this.baseUrl + '/api/loggedIn', '', {withCredentials: true})
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
    const url = this.baseUrl + '/api/user/';
    return this.http.post(url, user);
  }




  findUserByUsername(username: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username);
  }



  findUserByCredentials(username, password) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    console.log(url);
    return this.http.get(url);
  }



  findUserById(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url);
  }

  updateUser(userId: string, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user);
  }


}
