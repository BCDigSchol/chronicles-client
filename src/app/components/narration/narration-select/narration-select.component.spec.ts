import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationSelectComponent } from './narration-select.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NarrationSelectComponent', () => {
  let component: NarrationSelectComponent;
  let fixture: ComponentFixture<NarrationSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationSelectComponent],
      providers: [ HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(NarrationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
