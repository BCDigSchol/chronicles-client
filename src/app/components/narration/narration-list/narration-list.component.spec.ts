import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationListComponent } from './narration-list.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('NarrationListComponent', () => {
  let component: NarrationListComponent;
  let fixture: ComponentFixture<NarrationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrationListComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(NarrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
