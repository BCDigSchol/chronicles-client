import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';

import { LoginComponent } from './login.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from 'app/services/api.service';
import { UserService } from 'app/services/user.service';

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


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        HttpClient,
        HttpHandler,
        UserService,
        {
          provide: ApiService,
          useClass: MockApiService
        }
      ],
      imports: [
        FormsModule,
        MatSnackBarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate get user details with isUserLogin', fakeAsync( async () => {
    let testResult = await component.isUserLogin();
    expect(component.user).toBeDefined();
  }));
});
