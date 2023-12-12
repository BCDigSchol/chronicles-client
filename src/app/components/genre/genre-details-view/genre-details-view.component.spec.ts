import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDetailsViewComponent } from './genre-details-view.component';
import { GenreDetailsComponent } from '../genre-details/genre-details.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('GenreDetailsViewComponent', () => {
  let component: GenreDetailsViewComponent;
  let fixture: ComponentFixture<GenreDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreDetailsViewComponent, GenreDetailsComponent ],
      imports: [ MatIconModule, MatDialogModule, MatSnackBarModule ],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '1';
                },
              },
            },
          }
        }
      ],
    });
    fixture = TestBed.createComponent(GenreDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
