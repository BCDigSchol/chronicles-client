import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationDetailsComponent } from './narration-details.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

describe('NarrationDetailsComponent', () => {
  let component: NarrationDetailsComponent;
  let fixture: ComponentFixture<NarrationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationDetailsComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatDialogModule, MatSnackBarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(NarrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
