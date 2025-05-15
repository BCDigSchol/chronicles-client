import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEditComponent } from './publication-edit.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('PublicationEditComponent', () => {
  let component: PublicationEditComponent;
  let fixture: ComponentFixture<PublicationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationEditComponent],
      providers: [ HttpClient, HttpHandler],
      imports: [ MatSnackBarModule, MatDialogModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(PublicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
