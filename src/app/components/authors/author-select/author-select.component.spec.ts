import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSelectComponent } from './author-select.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AuthorSelectComponent', () => {
  let component: AuthorSelectComponent;
  let fixture: ComponentFixture<AuthorSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorSelectComponent],
      providers: [ HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(AuthorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
