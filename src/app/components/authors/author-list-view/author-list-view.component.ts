import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User, UserService } from './../../../services/user.service';

@Component({
  selector: 'app-author-list-view',
  templateUrl: './author-list-view.component.html',
  styleUrls: ['./author-list-view.component.scss']
})
export class AuthorListViewComponent implements OnInit {
  
  // observable and local object for user data, and loading flag
  userDetails$: Observable<User>;
  user: any;
  loading: boolean = true;

  constructor(
    private _user: UserService
  ) { }

  /**
   * Checks if the user is logged in, and gets user details as an
   * observable if so. Sets loading flag to false.
   */
  ngOnInit(): void {
    this.userDetails$ = this._user.user$;
    this.userDetails$.subscribe({ next:result => {
      this.user = result;
    }});
    this.loading = false;
  }
}
