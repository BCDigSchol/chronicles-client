import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// service imports
import { AuthGuardService } from './services/auth-guard.service';
import { IsAdminService } from './services/is-admin.service';

// component imports
import { HomeComponent } from './components/home/home.component';
import { PrivacyPolicyComponent } from './components/common/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExportComponent } from './components/export/export.component';
import { GenreListViewComponent } from './components/genre/genre-list-view/genre-list-view.component';
import { GenreAddViewComponent } from './components/genre/genre-add-view/genre-add-view.component';
import { GenreDetailsViewComponent } from './components/genre/genre-details-view/genre-details-view.component';
import { GenreEditViewComponent } from './components/genre/genre-edit-view/genre-edit-view.component';
import { NarrationListViewComponent } from './components/narration/narration-list-view/narration-list-view.component';
import { NarrationAddViewComponent } from './components/narration/narration-add-view/narration-add-view.component';
import { NarrationDetailsViewComponent } from './components/narration/narration-details-view/narration-details-view.component';
import { NarrationEditViewComponent } from './components/narration/narration-edit-view/narration-edit-view.component';
import { AuthorListViewComponent } from './components/authors/author-list-view/author-list-view.component';
import { AuthorAddViewComponent } from './components/authors/author-add-view/author-add-view.component';
import { AuthorDetailsViewComponent } from './components/authors/author-details-view/author-details-view.component';
import { AuthorEditViewComponent } from './components/authors/author-edit-view/author-edit-view.component';
import { PublicationListViewComponent } from './components/publication/publication-list-view/publication-list-view.component';
import { PublicationAddViewComponent } from './components/publication/publication-add-view/publication-add-view.component';
import { PublicationDetailsViewComponent } from './components/publication/publication-details-view/publication-details-view.component';
import { PublicationEditViewComponent } from './components/publication/publication-edit-view/publication-edit-view.component';

const routes: Routes = [
  // Set routes, designating middleware to check if user is logged in/an admin for certain routes
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent },
  { path: 'export', canActivate: [AuthGuardService, IsAdminService], component: ExportComponent },
  { path: 'genres', canActivate: [AuthGuardService, IsAdminService], component: GenreListViewComponent },
  { path: 'genres/add', canActivate: [AuthGuardService, IsAdminService], component: GenreAddViewComponent },
  { path: 'genres/:id', canActivate: [AuthGuardService, IsAdminService], component: GenreDetailsViewComponent},
  { path: 'genres/edit/:id', canActivate: [AuthGuardService, IsAdminService], component: GenreEditViewComponent },
  { path: 'narrations', canActivate: [AuthGuardService, IsAdminService], component: NarrationListViewComponent },
  { path: 'narrations/add', canActivate: [AuthGuardService, IsAdminService], component: NarrationAddViewComponent },
  { path: 'narrations/:id', canActivate: [AuthGuardService, IsAdminService], component: NarrationDetailsViewComponent},
  { path: 'narrations/edit/:id', canActivate: [AuthGuardService, IsAdminService], component: NarrationEditViewComponent },
  { path: 'authors', canActivate: [AuthGuardService, IsAdminService], component: AuthorListViewComponent },
  { path: 'authors/add', canActivate: [AuthGuardService, IsAdminService], component: AuthorAddViewComponent },
  { path: 'authors/:id', canActivate: [AuthGuardService, IsAdminService], component: AuthorDetailsViewComponent},
  { path: 'authors/edit/:id', canActivate: [AuthGuardService, IsAdminService], component: AuthorEditViewComponent },
  { path: 'publications', canActivate: [AuthGuardService, IsAdminService], component: PublicationListViewComponent },
  { path: 'publications/add', canActivate: [AuthGuardService, IsAdminService], component: PublicationAddViewComponent },
  { path: 'publications/:id', canActivate: [AuthGuardService, IsAdminService], component: PublicationDetailsViewComponent},
  { path: 'publications/edit/:id', canActivate: [AuthGuardService, IsAdminService], component: PublicationEditViewComponent },
  
  // privacy policy
  { path: 'privacy', component: PrivacyPolicyComponent },
  // redirects root to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // set 404 component and redirect all other entered routes to 404
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
