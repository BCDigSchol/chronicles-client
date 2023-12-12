import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreAddViewComponent } from './genre-add-view.component';
import { GenreAddComponent } from '../genre-add/genre-add.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


describe('GenreAddViewComponent', () => {
  let component: GenreAddViewComponent;
  let fixture: ComponentFixture<GenreAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreAddViewComponent, GenreAddComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatIconModule, MatSnackBarModule ]
    });
    fixture = TestBed.createComponent(GenreAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
