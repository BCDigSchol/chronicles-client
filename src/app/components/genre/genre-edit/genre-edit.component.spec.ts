import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreEditComponent } from './genre-edit.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

describe('GenreEditComponent', () => {
  let component: GenreEditComponent;
  let fixture: ComponentFixture<GenreEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreEditComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatSnackBarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(GenreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
