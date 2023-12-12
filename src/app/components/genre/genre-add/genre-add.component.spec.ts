import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreAddComponent } from './genre-add.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('GenreAddComponent', () => {
  let component: GenreAddComponent;
  let fixture: ComponentFixture<GenreAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreAddComponent],
      providers: [ HttpClient, HttpHandler],
      imports: [ MatSnackBarModule ]
    });
    fixture = TestBed.createComponent(GenreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
