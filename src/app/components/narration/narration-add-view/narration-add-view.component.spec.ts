import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationAddViewComponent } from './narration-add-view.component';

describe('NarrationAddViewComponent', () => {
  let component: NarrationAddViewComponent;
  let fixture: ComponentFixture<NarrationAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationAddViewComponent]
    });
    fixture = TestBed.createComponent(NarrationAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
