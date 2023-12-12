import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuComponent } from './nav-menu.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavMenuComponent],
      imports: [
        MatSnackBarModule
      ]
    });
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
