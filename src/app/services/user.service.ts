import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  username: string,
  email: string,
  role: string,
  theme: string,
  token: string,
  loggedIn: boolean
}

/**
 * UserService stores login info for later user by the application. It also registers
 * whether a user has logged in, and thus has a JSON Web Token for server authentication.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // create private subject and observables
  private _user = new BehaviorSubject<User>({
    username: '',
    email: '',
    role: '',
    theme: 'light',
    token: '',
    loggedIn: false
  });
  readonly user$ = this._user.asObservable();
  private user = {
    username: '',
    email: '',
    role: '',
    theme: 'light',
    token: '',
    loggedIn: false
  };

  constructor() { }

  /**
   * Stores user login info for later use and sets login state, given a JSON of user data
   * 
   * @param userDetails - JSON containing username, email, role, and JSON web token
   */
  login(userDetails: any) {
    this.user.username = userDetails.username;
    this.user.email = userDetails.email;
    this.user.role = userDetails.role;
    this.user.token = userDetails.token;
    this.user.theme = userDetails.theme;
    this.user.loggedIn = true;
    this._user.next(Object.assign({}, this.user));
  }

  /**
   * Logs the user out and removes user data.
   */
  logout() {
    this.user.username = '';
    this.user.email = '';
    this.user.role = '';
    this.user.token = '';
    this.user.theme = 'light';
    this.user.loggedIn = false;
    this._user.next(Object.assign({}, this.user));
  }

  /**
   * Returns true if theme is set to dark
   */
  isDarkTheme() {
    if (this.user.theme == 'dark') {
      return true;
    }
    return false;
  }

  /**
   * Sets theme to dark if light, otherwise dark
   */
  toggleDarkTheme() {
    if (this.user.theme == 'light') {
      this.user.theme = 'dark';
    }
    this.user.theme = 'light';
  }
}
