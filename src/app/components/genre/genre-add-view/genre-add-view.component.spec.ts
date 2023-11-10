import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreAddViewComponent } from './genre-add-view.component';

describe('GenreAddViewComponent', () => {
  let component: GenreAddViewComponent;
  let fixture: ComponentFixture<GenreAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreAddViewComponent]
    });
    fixture = TestBed.createComponent(GenreAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
