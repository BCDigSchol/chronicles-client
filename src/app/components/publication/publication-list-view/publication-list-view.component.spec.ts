import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationListViewComponent } from './publication-list-view.component';

describe('PublicationListViewComponent', () => {
  let component: PublicationListViewComponent;
  let fixture: ComponentFixture<PublicationListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationListViewComponent]
    });
    fixture = TestBed.createComponent(PublicationListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
