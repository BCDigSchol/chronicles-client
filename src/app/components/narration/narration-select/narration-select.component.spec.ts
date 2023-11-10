import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationSelectComponent } from './narration-select.component';

describe('NarrationSelectComponent', () => {
  let component: NarrationSelectComponent;
  let fixture: ComponentFixture<NarrationSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationSelectComponent]
    });
    fixture = TestBed.createComponent(NarrationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
