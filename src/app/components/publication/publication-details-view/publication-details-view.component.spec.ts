import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDetailsViewComponent } from './publication-details-view.component';

describe('PublicationDetailsViewComponent', () => {
  let component: PublicationDetailsViewComponent;
  let fixture: ComponentFixture<PublicationDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationDetailsViewComponent]
    });
    fixture = TestBed.createComponent(PublicationDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
