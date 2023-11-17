import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

import { ThemeService } from './services/theme.service';

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
  // theme setting
  isDarkTheme: Observable<boolean>;
  // status of site nav menu
  navMenuToggled: boolean = false;

  constructor(private _themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this._themeService.isDarkTheme;
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
