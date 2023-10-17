import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecsComponent } from './home-specs.component';

describe('HomeSpecsComponent', () => {
  let component: HomeSpecsComponent;
  let fixture: ComponentFixture<HomeSpecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSpecsComponent]
    });
    fixture = TestBed.createComponent(HomeSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
