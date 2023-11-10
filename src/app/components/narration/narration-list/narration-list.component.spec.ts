import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationListComponent } from './narration-list.component';

describe('NarrationListComponent', () => {
  let component: NarrationListComponent;
  let fixture: ComponentFixture<NarrationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationListComponent]
    });
    fixture = TestBed.createComponent(NarrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
