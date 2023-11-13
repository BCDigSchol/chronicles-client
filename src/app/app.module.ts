import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// service imports
import { InterceptorService } from './services/interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavMenuComponent } from './components/common/nav-menu/nav-menu.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { PrivacyPolicyComponent } from './components/common/privacy-policy/privacy-policy.component';
import { HomeIntroComponent } from './components/home/home-intro/home-intro.component';
import { HomeCreditsComponent } from './components/home/home-credits/home-credits.component';
import { HomeSpecsComponent } from './components/home/home-specs/home-specs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/profile/users/users.component';
import { ConfirmRoleChangeDialog } from './components/profile/users/users.component';
import { FilterComponent } from './components/common/filter/filter.component';
import { GenreListComponent } from './components/genre/genre-list/genre-list.component';
import { GenreListViewComponent } from './components/genre/genre-list-view/genre-list-view.component';
import { GenreAddComponent } from './components/genre/genre-add/genre-add.component';
import { GenreAddViewComponent } from './components/genre/genre-add-view/genre-add-view.component';
import { GenreEditViewComponent } from './components/genre/genre-edit-view/genre-edit-view.component';
import { GenreEditComponent } from './components/genre/genre-edit/genre-edit.component';
import { GenreSelectComponent } from './components/genre/genre-select/genre-select.component';
import { GenreDetailsViewComponent } from './components/genre/genre-details-view/genre-details-view.component';
import { GenreDetailsComponent } from './components/genre/genre-details/genre-details.component';
import { ConfirmDeleteGenreDialog } from './components/genre/genre-details/genre-details.component';
import { NarrationListViewComponent } from './components/narration/narration-list-view/narration-list-view.component';
import { NarrationListComponent } from './components/narration/narration-list/narration-list.component';
import { NarrationAddViewComponent } from './components/narration/narration-add-view/narration-add-view.component';
import { NarrationAddComponent } from './components/narration/narration-add/narration-add.component';
import { NarrationDetailsViewComponent } from './components/narration/narration-details-view/narration-details-view.component';
import { NarrationDetailsComponent } from './components/narration/narration-details/narration-details.component';
import { NarrationEditViewComponent } from './components/narration/narration-edit-view/narration-edit-view.component';
import { NarrationEditComponent } from './components/narration/narration-edit/narration-edit.component';
import { NarrationSelectComponent } from './components/narration/narration-select/narration-select.component';
import { ConfirmDeleteNarrationDialog } from './components/narration/narration-details/narration-details.component';
import { AuthorAddViewComponent } from './components/authors/author-add-view/author-add-view.component';
import { AuthorAddComponent } from './components/authors/author-add/author-add.component';
import { AuthorDetailsViewComponent } from './components/authors/author-details-view/author-details-view.component';
import { AuthorDetailsComponent } from './components/authors/author-details/author-details.component';
import { AuthorEditViewComponent } from './components/authors/author-edit-view/author-edit-view.component';
import { AuthorEditComponent } from './components/authors/author-edit/author-edit.component';
import { AuthorListViewComponent } from './components/authors/author-list-view/author-list-view.component';
import { AuthorListComponent } from './components/authors/author-list/author-list.component';
import { AuthorSelectComponent } from './components/authors/author-select/author-select.component';
import { ConfirmDeleteAuthorDialog } from './components/authors/author-details/author-details.component';
import { ExportComponent } from './components/export/export.component';
import { PublicationAddViewComponent } from './components/publication/publication-add-view/publication-add-view.component';
import { PublicationAddComponent } from './components/publication/publication-add/publication-add.component';
import { PublicationDetailsViewComponent } from './components/publication/publication-details-view/publication-details-view.component';
import { PublicationDetailsComponent } from './components/publication/publication-details/publication-details.component';
import { PublicationEditViewComponent } from './components/publication/publication-edit-view/publication-edit-view.component';
import { PublicationEditComponent } from './components/publication/publication-edit/publication-edit.component';
import { PublicationListViewComponent } from './components/publication/publication-list-view/publication-list-view.component';
import { PublicationListComponent } from './components/publication/publication-list/publication-list.component';
import { PublicationSelectComponent } from './components/publication/publication-select/publication-select.component';
import { ConfirmDeletePublicationDialog } from './components/publication/publication-details/publication-details.component';
import { ConfirmUnlinkItemDialog } from './components/publication/publication-edit/publication-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavMenuComponent,
    NotFoundComponent,
    PrivacyPolicyComponent,
    HomeIntroComponent,
    HomeCreditsComponent,
    HomeSpecsComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ConfirmRoleChangeDialog,
    FilterComponent,
    GenreListComponent,
    GenreListViewComponent,
    GenreAddComponent,
    GenreAddViewComponent,
    GenreEditViewComponent,
    GenreEditComponent,
    GenreSelectComponent,
    GenreDetailsViewComponent,
    GenreDetailsComponent,
    ConfirmDeleteGenreDialog,
    NarrationListViewComponent,
    NarrationListComponent,
    NarrationAddViewComponent,
    NarrationAddComponent,
    NarrationDetailsViewComponent,
    NarrationDetailsComponent,
    NarrationEditViewComponent,
    NarrationEditComponent,
    NarrationSelectComponent,
    ConfirmDeleteNarrationDialog,
    AuthorAddViewComponent,
    AuthorAddComponent,
    AuthorDetailsViewComponent,
    AuthorDetailsComponent,
    AuthorEditViewComponent,
    AuthorEditComponent,
    AuthorListViewComponent,
    AuthorListComponent,
    AuthorSelectComponent,
    ConfirmDeleteAuthorDialog,
    ExportComponent,
    PublicationAddViewComponent,
    PublicationAddComponent,
    PublicationDetailsViewComponent,
    PublicationDetailsComponent,
    PublicationEditViewComponent,
    PublicationEditComponent,
    PublicationListViewComponent,
    PublicationListComponent,
    PublicationSelectComponent,
    ConfirmDeletePublicationDialog,
    ConfirmUnlinkItemDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
