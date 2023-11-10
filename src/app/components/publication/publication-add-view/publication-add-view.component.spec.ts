import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAddViewComponent } from './publication-add-view.component';

describe('PublicationAddViewComponent', () => {
  let component: PublicationAddViewComponent;
  let fixture: ComponentFixture<PublicationAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationAddViewComponent]
    });
    fixture = TestBed.createComponent(PublicationAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
