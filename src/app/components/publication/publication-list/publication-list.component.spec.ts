import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationListComponent } from './publication-list.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('PublicationListComponent', () => {
  let component: PublicationListComponent;
  let fixture: ComponentFixture<PublicationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationListComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(PublicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
