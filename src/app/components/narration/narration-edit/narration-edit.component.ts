import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from './../../../services/api.service';
import { User, UserService } from './../../../services/user.service';

@Component({
  selector: 'app-narration-edit',
  templateUrl: './narration-edit.component.html',
  styleUrls: ['./narration-edit.component.scss']
})
export class NarrationEditComponent implements OnInit {
  // event emitter
  @Output() successfullyAdded = new EventEmitter<string>();
  // id of item to edit
  @Input() itemId = '';

  // loading flag & error messages
  loading: boolean = true;
  loadingError: boolean = false;
  errorMsgs: string[] = [];
  serverErrorMsgs: string[] = [];
  // observable and local object for user data
  userDetails$: Observable<User>;
  user: any;
  // storage for current item data from server
  protectedData: any;

  constructor(
    private _api: ApiService,
    private _user: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  /**
   * Gets user details. Gets current item information from the server
   */
  ngOnInit(): void {
    // get user profile details
    this.userDetails$ = this._user.user$;
    this.userDetails$.subscribe({ next:result => {
      this.user = result;
    }});
    this._api.getTypeRequest('narrations/' + this.itemId).subscribe({
      next: (res: any) => {
        this.protectedData = res;
        this.loading = false;
      },
      error: (error: any) => {
        this.loadingError = true;
      }
    });
  }

  /**
   * Ensures request meets basic validation and outputs client-side
   * error messages if it does not.
   * 
   * @param reqObject - The data JSON to be sent
   * @returns true if object is valid, otherwise null
   */
  private _validate(reqObject: any): boolean {
    var isValid = true;
    this.errorMsgs = [];
    if (reqObject.narration == '' || reqObject.narration.replace(/\s+/g, ' ') == ' ') {
      this.errorMsgs.push('Narration cannot be blank or a space');
      isValid = false;
    }
    return isValid;
  }

  /**
   * Cycles through each property in the req object and if it is a string,
   * trim and leading or trailing whitespaces.
   * 
   * @param objectToTrim - The request object, with data to send
   * @returns A request object, with any strings trimmed of leading/trailing whitespace
   */
  trimReqObject(objectToTrim: any) {
    Object.keys(objectToTrim).forEach(property => {
      if (typeof objectToTrim[property] == 'string') {
        objectToTrim[property] = objectToTrim[property].trim();
      }
    });
    return objectToTrim;
  }

  /**
   * Submits user data to server and stores local user data from server response.
   * Also removes all previous linked item information, then re-adds new linked items.
   * 
   * @param form Form data
   */
  onSubmit(form: any) {
    var reqObject = {
      id: this.protectedData.id,
    };
    // copy values from form into request object
    Object.assign(reqObject, form.value);
    reqObject = this.trimReqObject(reqObject);
    if (this._validate(reqObject)) {
      this._api.putTypeRequest('narrations/' + this.protectedData.id.toString(), reqObject).subscribe((res: any) => {
        if (res.status !== 0) {
          this._snackBar.open('Item successfully updated!', '', { duration: 3000 });
          // navigate to conferences
          this._router.navigate(['/narrations/' + this.protectedData.id]);
        }
        else {
          this.serverErrorMsgs = res.messages;
        }
      });
    }
  }
}
