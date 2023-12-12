import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListViewComponent } from './genre-list-view.component';
import { GenreListComponent } from '../genre-list/genre-list.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('GenreListViewComponent', () => {
  let component: GenreListViewComponent;
  let fixture: ComponentFixture<GenreListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreListViewComponent, GenreListComponent ],
      providers: [ HttpClient, HttpHandler],
      imports: [ RouterTestingModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(GenreListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
