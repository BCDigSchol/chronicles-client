import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationDetailsComponent } from './narration-details.component';

describe('NarrationDetailsComponent', () => {
  let component: NarrationDetailsComponent;
  let fixture: ComponentFixture<NarrationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationDetailsComponent]
    });
    fixture = TestBed.createComponent(NarrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
