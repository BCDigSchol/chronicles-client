import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAddViewComponent } from './author-add-view.component';

describe('AuthorAddViewComponent', () => {
  let component: AuthorAddViewComponent;
  let fixture: ComponentFixture<AuthorAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorAddViewComponent]
    });
    fixture = TestBed.createComponent(AuthorAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
