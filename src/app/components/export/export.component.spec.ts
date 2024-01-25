import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { ExportComponent } from './export.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from 'app/services/api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

class MockApiService {
  getTypeRequest(url:string) {
    return of({
      publications: [],
      authors: [],
      genres: [],
      narrations: [],
      authorsOfPublications: [],
      genresOfPuublications: [],
      narrationsOfPublications: []
    });
  }
}


describe('ExportComponent', () => {
  let component: ExportComponent;
  let fixture: ComponentFixture<ExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ApiService,
          useClass: MockApiService
        }
      ],
      imports: [ MatIconModule, MatDividerModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate list of urls after running generateDownloadJsonUri()', fakeAsync( async () => {
    await component.generateDownloadJsonUri();
    expect(component.downloadJsonHrefs).toBeDefined();
    expect(typeof(component.downloadJsonHrefs)).toBe('object');
    expect(typeof(component.downloadJsonHrefs.publications)).toBe('object');
    expect(typeof(component.downloadJsonHrefs.authors)).toBe('object');
    expect(typeof(component.downloadJsonHrefs.genres)).toBe('object');
    expect(typeof(component.downloadJsonHrefs.narrations)).toBe('object');
    expect(typeof(component.downloadJsonHrefs.authorsOfPublications)).toBe('object');
    expect(typeof(component.downloadJsonHrefs.genresOfPublications)).toBe('object');
    expect(typeof(component.downloadJsonHrefs.narrationsOfPublications)).toBe('object');
  }));

});
