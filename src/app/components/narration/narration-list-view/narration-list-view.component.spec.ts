import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationListViewComponent } from './narration-list-view.component';

describe('NarrationListViewComponent', () => {
  let component: NarrationListViewComponent;
  let fixture: ComponentFixture<NarrationListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationListViewComponent]
    });
    fixture = TestBed.createComponent(NarrationListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
