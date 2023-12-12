import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [
        MatCardModule,
        MatSnackBarModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
