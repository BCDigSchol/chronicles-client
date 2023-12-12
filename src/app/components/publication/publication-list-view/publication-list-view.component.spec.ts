import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationListViewComponent } from './publication-list-view.component';
import { PublicationListComponent } from '../publication-list/publication-list.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('PublicationListViewComponent', () => {
  let component: PublicationListViewComponent;
  let fixture: ComponentFixture<PublicationListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationListViewComponent, PublicationListComponent ],
      providers: [ HttpClient, HttpHandler],
      imports: [ RouterTestingModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(PublicationListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
