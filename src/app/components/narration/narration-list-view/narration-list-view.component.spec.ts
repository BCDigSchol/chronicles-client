import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationListViewComponent } from './narration-list-view.component';
import { NarrationListComponent } from '../narration-list/narration-list.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('NarrationListViewComponent', () => {
  let component: NarrationListViewComponent;
  let fixture: ComponentFixture<NarrationListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrationListViewComponent, NarrationListComponent ],
      providers: [ HttpClient, HttpHandler],
      imports: [ RouterTestingModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(NarrationListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
