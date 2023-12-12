import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAddComponent } from './publication-add.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PublicationAddComponent', () => {
  let component: PublicationAddComponent;
  let fixture: ComponentFixture<PublicationAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationAddComponent],
      providers: [ HttpClient, HttpHandler],
      imports: [ MatSnackBarModule ]
    });
    fixture = TestBed.createComponent(PublicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
