import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListComponent } from './genre-list.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('GenreListComponent', () => {
  let component: GenreListComponent;
  let fixture: ComponentFixture<GenreListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreListComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(GenreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
