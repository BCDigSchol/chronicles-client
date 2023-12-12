import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAddViewComponent } from './author-add-view.component';
import { AuthorAddComponent } from '../author-add/author-add.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AuthorAddViewComponent', () => {
  let component: AuthorAddViewComponent;
  let fixture: ComponentFixture<AuthorAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorAddViewComponent, AuthorAddComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatIconModule, MatSnackBarModule ]
    });
    fixture = TestBed.createComponent(AuthorAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
