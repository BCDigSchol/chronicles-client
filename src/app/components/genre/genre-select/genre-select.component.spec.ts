import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSelectComponent } from './genre-select.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GenreSelectComponent', () => {
  let component: GenreSelectComponent;
  let fixture: ComponentFixture<GenreSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreSelectComponent],
      providers: [ HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(GenreSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
