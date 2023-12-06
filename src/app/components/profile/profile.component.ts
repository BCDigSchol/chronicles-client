import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from './../../services/api.service';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { ThemeService } from 'app/services/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // property to store data retreived from server
  public protectedData: any;
  // flags to store whether component has loaded fully and is error free
  public loading: boolean = true;
  public loadingError: boolean = false;
  // stores state of theme setting
  isDarkTheme: Observable<boolean>;

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    public _user: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _theme: ThemeService
  ) { }

  /**
   * Checks stored info for username, then gets updated user info from server
   */
  ngOnInit(): void {
    // get theme setting
    this.isDarkTheme = this._theme.isDarkTheme;
    this.refreshData();
  }

  /** Gets data from server */
  refreshData() {
    // get stored user information for username
    const userDetails = JSON.parse(this._auth.getUserDetails()!);
    // get updated user information from server
    this._api.getTypeRequest('profile/' + userDetails.username).subscribe({
      next: (res: any) => {
        this.protectedData = res.data;
        if (this.protectedData.theme == 'light') {
          this._theme.setDarkTheme(false);
        }
        else {
          this._theme.setDarkTheme(true);
        }
        this.loading = false;
      },
      error: (error: any) => {
        this.loadingError = true;
      }
    });
  }

  /**
   * Logs user out
   */
  logout() {
    this._auth.clearStorage();
    this._user.logout();
    this._snackBar.open('Successfully logged out!', '', { duration: 2000 });
    this._router.navigate(['']);
  }

  /**
   * Toggles the dark theme setting on the theme service
   */
  toggleDarkTheme(checked: boolean) {
    let updatedData = {
      username: this.protectedData.username,
      theme: 'light'
    };
    // set to dark theme if theme is already light
    if (this.protectedData.theme == 'light') {
      updatedData.theme = 'dark'
    }
    // update theme in local storage
    let localDataString = this._auth.getUserDetails();
    if (localDataString) {
      let localData = JSON.parse(localDataString);
      localData.theme = updatedData.theme;
      this._auth.setDataInLocalStorage('userData', JSON.stringify(localData));
    }
    this._api.putTypeRequest('user/update/' + this.protectedData.username, updatedData).subscribe({
      next: (res: any) => {
        if (updatedData.theme == 'light') {
          this._theme.setDarkTheme(false);
        }
        else {
          this._theme.setDarkTheme(true);
        }
        
        this.refreshData();
      },
      error: (error: any) => {
        this.loadingError = true;
      }
    });
  }

}
