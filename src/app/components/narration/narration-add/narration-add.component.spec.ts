import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationAddComponent } from './narration-add.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('NarrationAddComponent', () => {
  let component: NarrationAddComponent;
  let fixture: ComponentFixture<NarrationAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationAddComponent],
      providers: [ HttpClient, HttpHandler],
      imports: [ MatSnackBarModule ]
    });
    fixture = TestBed.createComponent(NarrationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
