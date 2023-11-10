import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListViewComponent } from './genre-list-view.component';

describe('GenreListViewComponent', () => {
  let component: GenreListViewComponent;
  let fixture: ComponentFixture<GenreListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreListViewComponent]
    });
    fixture = TestBed.createComponent(GenreListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
