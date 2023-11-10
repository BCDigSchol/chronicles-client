import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from './../../../services/api.service';
import { User, UserService } from './../../../services/user.service';

// the object to be passed/received by the confirmation dialogue
export interface ConfirmUnlinkDialogData {
  id: number;
  title: string;
  itemType: string;
  confirm: boolean;
}

interface LinkedItems {
  authors: {
    displayLink: boolean;
    displayAdd: boolean;
    acceptableItems: any[];
  };
  genres: {
    displayLink: boolean;
    displayAdd: boolean;
    acceptableItems: any[];
  };
  narrations: {
    displayLink: boolean;
    displayAdd: boolean;
    acceptableItems: any[];
  };
};

interface SelectionOptions {
  setting: string[];
  period: string[];
  timeScale: string[];
  protagonistCategory: string[];
  protagonistGroupType: string[];
};

function sortObjListByProperty(list: any[], property: string) {
  return list.sort(function(a:any, b:any) {
    // sort list of items alphabetically by title
    let textA = null;
    let textB = null;
    if (a[property]) {
      textA = a[property].toUpperCase();
    }
    if (b[property]) {
      textB = b[property].toUpperCase();
    }
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.scss']
})
export class PublicationEditComponent implements OnInit {
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

  // for storing possible and current values for drop down selection menus
  selectionOptions: SelectionOptions = {
    setting: ['Family Home', 'School or Other Institution', 'Village/Town', 'London', 'Other Major City', 'County', 'Region', 'Nation', 'International', 'Nature', 'Fantasy'],
    period: ['Contemporary/Unspecified', 'Ancient (Pre-300 AD)', 'Middle Ages (300-1400)', 'Early Modern (1400-1700)', 'Eighteenth Century (1700-1800)'],
    timeScale: ['Months', 'Years', 'Decades', 'Other'],
    protagonistCategory: ['Individual', 'Group', 'No Main Character'],
    protagonistGroupType: ['Family', 'School', 'Clergy', 'Community Members'],
  };

  // storing items to link and their display status
  linkedItems: LinkedItems = {
    authors: {
      displayLink: false,
      displayAdd: false,
      acceptableItems: [],
    },
    genres: {
      displayLink: false,
      displayAdd: false,
      acceptableItems: [],
    },
    narrations: {
      displayLink: false,
      displayAdd: false,
      acceptableItems: [],
    }
  };

  constructor(
    private _api: ApiService,
    private _user: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
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
    this.refreshData();
  }

  /**
   * Gets a fresh snapshot of data from the server
   */
  refreshData() {
    this._api.getTypeRequest('publications/' + this.itemId).subscribe({
      next: (res: any) => {
        this.protectedData = res;
        this._api.getTypeRequest('authors/').subscribe((authorsRes: any) => {
          this.linkedItems.authors.acceptableItems = sortObjListByProperty(authorsRes, 'authors');
          this._api.getTypeRequest('genres/').subscribe((genresRes: any) => {
            this.linkedItems.genres.acceptableItems = sortObjListByProperty(genresRes, 'genres');
            this._api.getTypeRequest('narrations/').subscribe((narrationsRes: any) => {
              this.linkedItems.narrations.acceptableItems = sortObjListByProperty(narrationsRes, 'narrations');
              this.loading = false;
            });
          });
        });
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
    if (reqObject.title == '' || reqObject.title.replace(/\s+/g, ' ') == ' ') {
      this.errorMsgs.push('Title cannot be blank!');
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
      title: this.protectedData.title,
      subtitle: this.protectedData.subtitle || '',
      settingCategory: this.protectedData.settingCategory,
      period: this.protectedData.period,
      timeScale: this.protectedData.timeScale,
      settingName: this.protectedData.settingName,
      protagonistCategory: this.protectedData.protagonistCategory,
      protagonistGroupType: this.protectedData.protagonistGroupType
    };
    // copy values from form into request object
    Object.assign(reqObject, form.value);
    reqObject = this.trimReqObject(reqObject);
    if (this._validate(reqObject)) {
      this._api.putTypeRequest('publications/' + this.protectedData.id.toString(), reqObject).subscribe((res: any) => {
        if (res.status !== 0) {
          this._snackBar.open('Item successfully updated!', '', { duration: 3000 });
          // navigate to conferences
          this._router.navigate(['/publications/' + this.protectedData.id]);
        }
        else {
          this.serverErrorMsgs = res.messages;
        }
      });
    }
  }

  /**
   * Gets item info from html fields, ensures it has not already
   * been added, then adds it to the list of items that will be linked
   * upon submission.
   * 
   * @param itemData - Object with item data to be linked
   */
  linkAuthor(itemData: any) {
    // ensure no duplication
    let isDuplicate = false;
    for (let itemToLink of this.protectedData.authors) {
      if (itemToLink.id == itemData.id) {
        isDuplicate = true;
      }
    }
    let authorReqObject = {
      publicationId: this.protectedData.id,
      authorId: itemData.id,
      publishedHonorific: itemData.publishedHonorific,
      publishedName: itemData.publishedName,
      notes: itemData.notes
    };
    this._api.postTypeRequest('authors-of-publications/', authorReqObject).subscribe({
      next: (res: any) => {

      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this._snackBar.open('Author successfully linked!', '', { duration: 3000 });
    this.refreshData();
    this.linkedItems.authors.displayLink = false;
  }

  /**
   * Removes an item that was set to be linked
   * 
   * @param id - ID of the item
   */
  removeAuthor(id: number) {
    // set size and data of dialogue box
    const dialogRef = this.dialog.open(ConfirmUnlinkItemDialog, {
      width: '250px',
      data: { id: this.itemId, title: this.protectedData.title, itemType: 'author'},
    });
    // alter user role after closed, if confirmed
    dialogRef.afterClosed().subscribe((results) => {
      if (results == true) {
        this._api.deleteTypeRequest('authors-of-publications/' + this.protectedData.id.toString() + '/' + id.toString()).subscribe((res:any) => {
          if (res.message == 'AuthorOfPublication was deleted successfully!') {
            this._snackBar.open('Author successfully unlinked!', '', { duration: 3000 });
          }
          else {
            this._snackBar.open('Problem unlinking author!', '', { duration: 5000 });
          }
          this.refreshData();
        });
      }
    });
    return true;
  }

  /**
   * Gets item info from html fields, ensures it has not already
   * been added, then adds it to the list of items that will be linked
   * upon submission.
   * 
   * @param itemData - Object with item data to be linked
   */
  linkGenre(itemData: any) {
    // ensure no duplication
    let isDuplicate = false;
    for (let itemToLink of this.protectedData.genres) {
      if (itemToLink.id == itemData.id) {
        isDuplicate = true;
      }
    }
    let genreReqObject = {
      publicationId: this.protectedData.id,
      genreId: itemData.id,
      notes: itemData.notes
    };
    this._api.postTypeRequest('genres-of-publications/', genreReqObject).subscribe();
    this._snackBar.open('Genre successfully linked!', '', { duration: 3000 });
    this.refreshData();
    this.linkedItems.genres.displayLink = false;
  }

  /**
   * Removes an item that was set to be linked.
   * @param id - ID of the item
   */
  removeGenre(id: number) {
    // set size and data of dialogue box
    const dialogRef = this.dialog.open(ConfirmUnlinkItemDialog, {
      width: '250px',
      data: { id: this.itemId, title: this.protectedData.title, itemType: 'genre'},
    });
    // alter user role after closed, if confirmed
    dialogRef.afterClosed().subscribe((results) => {
      if (results == true) {
        this._api.deleteTypeRequest('genres-of-publications/' + this.protectedData.id.toString() + '/' + id.toString()).subscribe((res:any) => {
          if (res.message == 'GenreOfPublication was deleted successfully!') {
            this._snackBar.open('Genre successfully unlinked!', '', { duration: 3000 });
          }
          else {
            this._snackBar.open('Problem unlinking genre!', '', { duration: 5000 });
          }
          this.refreshData();
        });
      }
    });
    return true;
  }

  /**
   * Gets item info from html fields, ensures it has not already
   * been added, then adds it to the list of items that will be linked
   * upon submission.
   * 
   * @param itemData - Object with item data to be linked
   */
  linkNarration(itemData: any) {
    // ensure no duplication
    let isDuplicate = false;
    for (let itemToLink of this.protectedData.narrations) {
      if (itemToLink.id == itemData.id) {
        isDuplicate = true;
      }
    }
    let narrationReqObject = {
      publicationId: this.protectedData.id,
      narrationId: itemData.id,
      notes: itemData.notes
    };
    this._api.postTypeRequest('narrations-of-publications/', narrationReqObject).subscribe();
    this._snackBar.open('Narration style successfully linked!', '', { duration: 3000 });
    this.linkedItems.narrations.displayLink = false;
    this.refreshData();
  }

  /**
  * Removes an item that was set to be linked.
  * 
  * @param id - ID of the item
  */
  removeNarration(id: number) {
    // set size and data of dialogue box
    const dialogRef = this.dialog.open(ConfirmUnlinkItemDialog, {
      width: '250px',
      data: { id: this.itemId, title: this.protectedData.title, itemType: 'narration style'},
    });
    // alter user role after closed, if confirmed
    dialogRef.afterClosed().subscribe((results) => {
      if (results == true) {
        this._api.deleteTypeRequest('narrations-of-publications/' + this.protectedData.id.toString() + '/' + id.toString()).subscribe((res:any) => {
          if (res.message == 'NarrationOfPublication was deleted successfully!') {
            this._snackBar.open('Narration style successfully unlinked!', '', { duration: 3000 });
          }
          else {
            this._snackBar.open('Problem unlinking narration style!', '', { duration: 5000 });
          }
          this.refreshData();
        });
      }
    });
    return true;
  }
}

@Component({
  selector: 'confirm-unlink-item-dialog',
  templateUrl: 'confirm-unlink-item.dialogue.html',
})
export class ConfirmUnlinkItemDialog {

  constructor(
    public dialogRef: MatDialogRef<ConfirmUnlinkItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmUnlinkDialogData
  ) {}
}