import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationEditComponent } from './narration-edit.component';

describe('NarrationEditComponent', () => {
  let component: NarrationEditComponent;
  let fixture: ComponentFixture<NarrationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationEditComponent]
    });
    fixture = TestBed.createComponent(NarrationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
