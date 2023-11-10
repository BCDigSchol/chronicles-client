import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEditViewComponent } from './publication-edit-view.component';

describe('PublicationEditViewComponent', () => {
  let component: PublicationEditViewComponent;
  let fixture: ComponentFixture<PublicationEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationEditViewComponent]
    });
    fixture = TestBed.createComponent(PublicationEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
