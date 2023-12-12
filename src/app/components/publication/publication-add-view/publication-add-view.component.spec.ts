import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAddViewComponent } from './publication-add-view.component';
import { PublicationAddComponent } from '../publication-add/publication-add.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PublicationAddViewComponent', () => {
  let component: PublicationAddViewComponent;
  let fixture: ComponentFixture<PublicationAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationAddViewComponent, PublicationAddComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatIconModule, MatSnackBarModule ]
    });
    fixture = TestBed.createComponent(PublicationAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
