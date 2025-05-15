import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDetailsViewComponent } from './publication-details-view.component';
import { PublicationDetailsComponent } from '../publication-details/publication-details.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PublicationDetailsViewComponent', () => {
  let component: PublicationDetailsViewComponent;
  let fixture: ComponentFixture<PublicationDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationDetailsViewComponent, PublicationDetailsComponent ],
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
    fixture = TestBed.createComponent(PublicationDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
