import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportComponent } from './export.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatIcon, MatIconModule } from '@angular/material/icon';

describe('ExportComponent', () => {
  let component: ExportComponent;
  let fixture: ComponentFixture<ExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ MatIconModule ]
    });
    fixture = TestBed.createComponent(ExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
