import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDetailsComponent } from './genre-details.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

describe('GenreDetailsComponent', () => {
  let component: GenreDetailsComponent;
  let fixture: ComponentFixture<GenreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreDetailsComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatDialogModule, MatSnackBarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(GenreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
