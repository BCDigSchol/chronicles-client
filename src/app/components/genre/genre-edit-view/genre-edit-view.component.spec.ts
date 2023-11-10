import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreEditViewComponent } from './genre-edit-view.component';

describe('GenreEditViewComponent', () => {
  let component: GenreEditViewComponent;
  let fixture: ComponentFixture<GenreEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreEditViewComponent]
    });
    fixture = TestBed.createComponent(GenreEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
