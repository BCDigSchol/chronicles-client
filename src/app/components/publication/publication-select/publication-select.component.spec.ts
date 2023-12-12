import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSelectComponent } from './publication-select.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PublicationSelectComponent', () => {
  let component: PublicationSelectComponent;
  let fixture: ComponentFixture<PublicationSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationSelectComponent],
      providers: [ HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(PublicationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
