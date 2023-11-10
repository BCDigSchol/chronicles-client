import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationDetailsViewComponent } from './narration-details-view.component';

describe('NarrationDetailsViewComponent', () => {
  let component: NarrationDetailsViewComponent;
  let fixture: ComponentFixture<NarrationDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationDetailsViewComponent]
    });
    fixture = TestBed.createComponent(NarrationDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
