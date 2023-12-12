import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationDetailsViewComponent } from './narration-details-view.component';
import { NarrationDetailsComponent } from '../narration-details/narration-details.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('NarrationDetailsViewComponent', () => {
  let component: NarrationDetailsViewComponent;
  let fixture: ComponentFixture<NarrationDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrationDetailsViewComponent, NarrationDetailsComponent ],
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
    fixture = TestBed.createComponent(NarrationDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
