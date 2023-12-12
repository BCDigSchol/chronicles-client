import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAddComponent } from './author-add.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AuthorAddComponent', () => {
  let component: AuthorAddComponent;
  let fixture: ComponentFixture<AuthorAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorAddComponent],
      providers: [ HttpClient, HttpHandler],
      imports: [ MatSnackBarModule ]
    });
    fixture = TestBed.createComponent(AuthorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
