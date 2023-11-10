import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationEditViewComponent } from './narration-edit-view.component';

describe('NarrationEditViewComponent', () => {
  let component: NarrationEditViewComponent;
  let fixture: ComponentFixture<NarrationEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationEditViewComponent]
    });
    fixture = TestBed.createComponent(NarrationEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
