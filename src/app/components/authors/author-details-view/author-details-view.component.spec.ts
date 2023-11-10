import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailsViewComponent } from './author-details-view.component';

describe('AuthorDetailsViewComponent', () => {
  let component: AuthorDetailsViewComponent;
  let fixture: ComponentFixture<AuthorDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorDetailsViewComponent]
    });
    fixture = TestBed.createComponent(AuthorDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
