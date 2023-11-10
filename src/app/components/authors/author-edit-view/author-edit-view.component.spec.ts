import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorEditViewComponent } from './author-edit-view.component';

describe('AuthorEditViewComponent', () => {
  let component: AuthorEditViewComponent;
  let fixture: ComponentFixture<AuthorEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorEditViewComponent]
    });
    fixture = TestBed.createComponent(AuthorEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
