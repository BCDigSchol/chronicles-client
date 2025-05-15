import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorEditViewComponent } from './author-edit-view.component';
import { AuthorEditComponent } from '../author-edit/author-edit.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AuthorEditViewComponent', () => {
  let component: AuthorEditViewComponent;
  let fixture: ComponentFixture<AuthorEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorEditViewComponent, AuthorEditComponent ],
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
    fixture = TestBed.createComponent(AuthorEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
