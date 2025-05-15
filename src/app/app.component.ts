import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

import { ThemeService } from './services/theme.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeService]
})
export class AppComponent {
  // view to child component
  @ViewChild('sidenav') sidenav: MatSidenav;
  // app title
  title = 'chronicles';
  // status of site nav menu
  navMenuToggled: boolean = false;
  // theme setting
  isDarkTheme: Observable<boolean>;
  // property to store data retreived from server
  public protectedData: any;
  // flags to store whether component has loaded fully and is error free
  public loading: boolean = true;
  public loadingError: boolean = false;

  constructor(
    private _theme: ThemeService,
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit() {
    this.isDarkTheme = this._theme.isDarkTheme;
    this.refreshData();
    
  }

  /**
   * Gets data from server
   * */
  refreshData() {
    // get stored user information for username
    const userDetails = JSON.parse(this._auth.getUserDetails()!);
    if (userDetails) {
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
  }

  /**
   * Executed by header component event emitter, toggles nav menu status
   */
  toggleNavMenu() {
    this.navMenuToggled = !this.navMenuToggled;
    if (this.navMenuToggled) {
      this.sidenav.open();
    }
    else {
      this.sidenav.close();
    }
  }

}
