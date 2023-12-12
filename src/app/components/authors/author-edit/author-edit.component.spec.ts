import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorEditComponent } from './author-edit.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

describe('AuthorEditComponent', () => {
  let component: AuthorEditComponent;
  let fixture: ComponentFixture<AuthorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorEditComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatSnackBarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(AuthorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
