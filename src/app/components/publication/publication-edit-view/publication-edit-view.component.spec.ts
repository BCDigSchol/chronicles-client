import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEditViewComponent } from './publication-edit-view.component';
import { PublicationEditComponent } from '../publication-edit/publication-edit.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

describe('PublicationEditViewComponent', () => {
  let component: PublicationEditViewComponent;
  let fixture: ComponentFixture<PublicationEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationEditViewComponent, PublicationEditComponent ],
      imports: [ MatIconModule, MatSnackBarModule, MatDialogModule ],
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
    fixture = TestBed.createComponent(PublicationEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
