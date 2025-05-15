import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDetailsComponent } from './publication-details.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

describe('PublicationDetailsComponent', () => {
  let component: PublicationDetailsComponent;
  let fixture: ComponentFixture<PublicationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationDetailsComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatDialogModule, MatSnackBarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(PublicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
