import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [ HttpClient, HttpHandler],
      imports: [
        FormsModule,
        MatSnackBarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
