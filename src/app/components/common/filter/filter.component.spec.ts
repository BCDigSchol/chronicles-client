import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [ MatCardModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
