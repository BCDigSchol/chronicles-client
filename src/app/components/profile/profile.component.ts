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
    private _user: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private themeService: ThemeService
  ) { }

  /**
   * Checks stored info for username, then gets updated user info from server
   */
  ngOnInit(): void {
    // get stored user information for username
    const userDetails = JSON.parse(this._auth.getUserDetails()!);
    // get theme setting
    this.isDarkTheme = this.themeService.isDarkTheme;
    // get updated user information from server
    this._api.getTypeRequest('profile/' + userDetails.username).subscribe({
      next: (res: any) => {
        this.protectedData = res.data;
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
    this.themeService.setDarkTheme(checked);
  }

}
