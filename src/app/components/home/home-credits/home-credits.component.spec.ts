import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCreditsComponent } from './home-credits.component';

describe('HomeCreditsComponent', () => {
  let component: HomeCreditsComponent;
  let fixture: ComponentFixture<HomeCreditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCreditsComponent]
    });
    fixture = TestBed.createComponent(HomeCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
