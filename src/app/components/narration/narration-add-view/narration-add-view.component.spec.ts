import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationAddViewComponent } from './narration-add-view.component';
import { NarrationAddComponent } from '../narration-add/narration-add.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


describe('NarrationAddViewComponent', () => {
  let component: NarrationAddViewComponent;
  let fixture: ComponentFixture<NarrationAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrationAddViewComponent, NarrationAddComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatIconModule, MatSnackBarModule ]
    });
    fixture = TestBed.createComponent(NarrationAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
