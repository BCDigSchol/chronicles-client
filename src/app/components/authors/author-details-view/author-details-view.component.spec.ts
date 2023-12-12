import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailsViewComponent } from './author-details-view.component';
import { AuthorDetailsComponent } from '../author-details/author-details.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AuthorDetailsViewComponent', () => {
  let component: AuthorDetailsViewComponent;
  let fixture: ComponentFixture<AuthorDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDetailsViewComponent, AuthorDetailsComponent ],
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
    fixture = TestBed.createComponent(AuthorDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
