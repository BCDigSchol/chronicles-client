import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationEditViewComponent } from './narration-edit-view.component';
import { NarrationEditComponent } from '../narration-edit/narration-edit.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('NarrationEditViewComponent', () => {
  let component: NarrationEditViewComponent;
  let fixture: ComponentFixture<NarrationEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrationEditViewComponent, NarrationEditComponent ],
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
    fixture = TestBed.createComponent(NarrationEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
