import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/common/header/header.component';
import { NavMenuComponent } from './components/common/nav-menu/nav-menu.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ HttpClient, HttpHandler ],
    imports: [
      RouterTestingModule,
       MatSidenavModule,
       BrowserAnimationsModule,
       MatSnackBarModule,
       MatToolbarModule,
       MatIconModule
      ],
    declarations: [AppComponent, HeaderComponent, NavMenuComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chronicles'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chronicles');
  });

});
