import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationListComponent } from './publication-list.component';

describe('PublicationListComponent', () => {
  let component: PublicationListComponent;
  let fixture: ComponentFixture<PublicationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationListComponent]
    });
    fixture = TestBed.createComponent(PublicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
