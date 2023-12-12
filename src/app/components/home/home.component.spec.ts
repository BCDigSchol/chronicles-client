import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeCreditsComponent } from './home-credits/home-credits.component';
import { HomeSpecsComponent } from './home-specs/home-specs.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HomeIntroComponent, HomeCreditsComponent, HomeSpecsComponent],
      imports: [ MatTabsModule, MatCardModule, MatListModule, BrowserAnimationsModule ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
