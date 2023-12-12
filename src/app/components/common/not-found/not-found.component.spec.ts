import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

import { MatCard, MatCardModule } from '@angular/material/card';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [ MatCardModule ]
    });
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
