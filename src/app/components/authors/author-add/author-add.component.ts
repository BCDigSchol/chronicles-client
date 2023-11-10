import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from './../../../services/api.service';
import { User, UserService } from './../../../services/user.service';

interface SelectionOptions {
  gender: {
    possible: string[];
    selected: string;
  };
  nationality: {
    possible: string[];
    selected: string;
  };
  specificNationality: {
    possible: string[];
    selected: string;
  };
  nonPerson: {
    possible: boolean[];
    selected: boolean;
  };
};

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.scss']
})
export class AuthorAddComponent implements OnInit {
  // event emitter
  @Output() successfullyAdded = new EventEmitter<string>();

  // loading flag & error messages
  loading: boolean = true;
  errorMsgs: string[] = [];
  serverErrorMsgs: string[] = [];
  // observable and local object for user data
  userDetails$: Observable<User>;
  user: any;

   // for storing possible and current values for drop down selection menus
   selectionOptions: SelectionOptions = {
    gender: {
      possible: ['Female', 'Male', 'Uncertain or N/A'],
      selected: 'Female'
    },
    nationality: {
      possible: ['British', 'Irish', 'American', 'French', 'German', 'Australian', 'Indian', 'South African', 'Other European', 'Other Empire', 'Other'],
      selected: 'British'
    },
    specificNationality: {
      possible: ['', 'English', 'Scottish', 'Welsh', 'Cornish'],
      selected: 'English'
    },
    nonPerson: {
      possible: [true, false],
      selected: false
    },
  };

  constructor(
    private _api: ApiService,
    private _user: UserService,
    private _snackBar: MatSnackBar
  ) { }


  /**
   * Gets user details, gets all current people and institutions
   * from the server, for use in selecting people and institutions
   * to link.
   */
  ngOnInit(): void {
    // get user profile details
    this.userDetails$ = this._user.user$;
    this.userDetails$.subscribe({ next:result => {
      this.user = result;
    }});
    this.loading = false;
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
    if (reqObject.surname == '' || reqObject.surname.replace(/\s+/g, ' ') == ' ') {
      this.errorMsgs.push('Surname cannot be blank or a space');
      isValid = false;
    }
    if (reqObject.gender != 'Male' && reqObject.gender != 'Female' && reqObject.gender != 'Uncertain or N/A') {
      this.errorMsgs.push('Gender must be Male, Female, or Uncertain');
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
   * 
   * @param form Form data
   */
  onSubmit(form: NgForm) {
    var reqObject = {
      surname: '',
      maidenName: '',
      otherNames: '',
      label: '',
      gender: this.selectionOptions.gender,
      nationality: this.selectionOptions.nationality,
      specificNationality: this.selectionOptions.specificNationality,
      nonPerson: this.selectionOptions.nonPerson,
      notes: ''
    };
    // copy values from form into request object
    Object.assign(reqObject, form.value);
    reqObject = this.trimReqObject(reqObject);
    if (this._validate(reqObject)) {
      this._api.postTypeRequest('authors', reqObject).subscribe({
        next: (res: any) => {
          if (res.status !== 0) {
            this._snackBar.open('Author successfully added!', '', { duration: 3000 });
            this.successfullyAdded.emit(res);
          }
          else {
            this.serverErrorMsgs = res.messages;
          }
        },
        error: (error: any) => {
          this.serverErrorMsgs.push(error)
        }
      });
    }
  }

}
