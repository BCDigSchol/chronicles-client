import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationEditComponent } from './narration-edit.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

describe('NarrationEditComponent', () => {
  let component: NarrationEditComponent;
  let fixture: ComponentFixture<NarrationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationEditComponent],
      providers: [ HttpClient, HttpHandler],
      imports: [ MatSnackBarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(NarrationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
