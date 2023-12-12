import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListViewComponent } from './author-list-view.component';
import { AuthorListComponent } from '../author-list/author-list.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('AuthorListViewComponent', () => {
  let component: AuthorListViewComponent;
  let fixture: ComponentFixture<AuthorListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorListViewComponent, AuthorListComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(AuthorListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
