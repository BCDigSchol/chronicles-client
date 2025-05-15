import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreEditViewComponent } from './genre-edit-view.component';
import { GenreEditComponent } from '../genre-edit/genre-edit.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('GenreEditViewComponent', () => {
  let component: GenreEditViewComponent;
  let fixture: ComponentFixture<GenreEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreEditViewComponent, GenreEditComponent ],
      imports: [ MatIconModule, MatSnackBarModule ],
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
    fixture = TestBed.createComponent(GenreEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
