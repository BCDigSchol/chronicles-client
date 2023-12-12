import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthService } from 'app/services/auth.service';
import { ThemeService } from 'app/services/theme.service';
import { MatIconModule } from '@angular/material/icon';

class MockAuthService {
  getUserDetails(): any {
    return JSON.stringify({
      username: 'testuser',
      email: 'testuser@email.com',
      role: 'Owner',
      theme: 'Light',
      password: 'password',
      createdAt: '2023-03-27T19:33:14.000Z',
      updatedAt: '2023-03-27T19:33:14.000Z'
    });
  }
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        HttpClient,
        HttpHandler,
        ThemeService,
        {
          provide: AuthService,
          useClass: MockAuthService
        }
      ],
      imports: [ MatSnackBarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
