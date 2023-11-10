import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListViewComponent } from './author-list-view.component';

describe('AuthorListViewComponent', () => {
  let component: AuthorListViewComponent;
  let fixture: ComponentFixture<AuthorListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorListViewComponent]
    });
    fixture = TestBed.createComponent(AuthorListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
