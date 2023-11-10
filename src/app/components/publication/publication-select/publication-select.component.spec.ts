import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSelectComponent } from './publication-select.component';

describe('PublicationSelectComponent', () => {
  let component: PublicationSelectComponent;
  let fixture: ComponentFixture<PublicationSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationSelectComponent]
    });
    fixture = TestBed.createComponent(PublicationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
