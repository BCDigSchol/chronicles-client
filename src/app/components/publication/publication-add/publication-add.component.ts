import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from './../../../services/api.service';
import { User, UserService } from './../../../services/user.service';

interface LinkedItems {
  authors: {
    displayLink: boolean;
    displayAdd: boolean;
    itemsToLink: any[];
    acceptableItems: any[];
  };
  genres: {
    displayLink: boolean;
    displayAdd: boolean;
    itemsToLink: any[];
    acceptableItems: any[];
  };
  narrations: {
    displayLink: boolean;
    displayAdd: boolean;
    itemsToLink: any[];
    acceptableItems: any[];
  };
};

interface SelectionOptions {
  setting: {
    possible: string[];
    selected: string;
  };
  period: {
    possible: string[];
    selected: string;
  };
  timeScale: {
    possible: string[];
    selected: string;
  };
  protagonistCategory: {
    possible: string[];
    selected: string;
  };
  protagonistGroupType: {
    possible: string[];
    selected: string;
  };
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
  selector: 'app-publication-add',
  templateUrl: './publication-add.component.html',
  styleUrls: ['./publication-add.component.scss']
})
export class PublicationAddComponent implements OnInit {
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
    setting: {
      possible: ['Family Home', 'School or Other Institution', 'Village/Town', 'London', 'Other Major City', 'County', 'Region', 'Nation', 'International', 'Nature', 'Fantasy'],
      selected: 'Family Home'
    },
    period: {
      possible: ['Contemporary/Unspecified', 'Ancient (Pre-300 AD)', 'Middle Ages (300-1400)', 'Early Modern (1400-1700)', 'Eighteenth Century (1700-1800)'],
      selected: 'Contemporary/Unspecified'
    },
    timeScale: {
      possible: ['Months', 'Years', 'Decades', 'Other'],
      selected: 'Months'
    },
    protagonistCategory: {
      possible: ['Individual', 'Group', 'No Main Character'],
      selected: 'Individual'
    },
    protagonistGroupType: {
      possible: ['Family', 'School', 'Clergy', 'Community Members'],
      selected: 'Family'
    }
  };

  // storing items to link and their display status
  linkedItems: LinkedItems = {
    authors: {
      displayLink: false,
      displayAdd: false,
      itemsToLink: [],
      acceptableItems: [],
    },
    genres: {
      displayLink: false,
      displayAdd: false,
      itemsToLink: [],
      acceptableItems: [],
    },
    narrations: {
      displayLink: false,
      displayAdd: false,
      itemsToLink: [],
      acceptableItems: [],
    }
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
      this.errorMsgs.push('Title cannot be blank or a space');
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
      title: '',
      subtitle: '',
      settingName: '',
      settingCategory: this.selectionOptions.setting.selected,
      period: this.selectionOptions.period.selected,
      timeScale: this.selectionOptions.timeScale.selected,
      protagonistCategory: this.selectionOptions.protagonistCategory.selected,
      protagonistGroupType: this.selectionOptions.protagonistGroupType.selected,
      notes: ''
    };
    // copy values from form into request object
    Object.assign(reqObject, form.value);
    reqObject = this.trimReqObject(reqObject);
    if (this._validate(reqObject)) {
      this._api.postTypeRequest('publications', reqObject).subscribe((res: any) => {
        for (let itemToLink of this.linkedItems.authors.itemsToLink) {
          let authorReqObject = {
            publicationId: res.id,
            authorId: itemToLink.id,
            publishedHonorific: itemToLink.publishedHonorific,
            publishedName: itemToLink.publishedName,
            notes: itemToLink.notes
          };
          this._api.postTypeRequest('authors-of-publications/', authorReqObject).subscribe();
        }
        for (let itemToLink of this.linkedItems.genres.itemsToLink) {
          let genreReqObject = {
            publicationId: res.id,
            genreId: itemToLink.id,
            notes: itemToLink.notes
          };
          this._api.postTypeRequest('genres-of-publications/', genreReqObject).subscribe();
        }
        for (let itemToLink of this.linkedItems.narrations.itemsToLink) {
          let narrationReqObject = {
            publicationId: res.id,
            narrationId: itemToLink.id,
            notes: itemToLink.notes
          };
          this._api.postTypeRequest('narrations-of-publications/', narrationReqObject).subscribe();
        }

        if (res.status !== 0) {
          this._snackBar.open('Publication successfully added!', '', { duration: 3000 });
          this.successfullyAdded.emit(res);
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
    for (let itemToLink of this.linkedItems.authors.itemsToLink) {
      if (itemToLink.id == itemData.id) {
        isDuplicate = true;
      }
    }
    // push new object
    if (!isDuplicate) {
      this.linkedItems.authors.itemsToLink.push({
        id: itemData.id,
        surname: itemData.surname,
        otherNames: itemData.otherNames,
        label: itemData.label,
        publishedHonorific: itemData.publishedHonorific || '',
        publishedName: itemData.publishedName || '',
        notes: itemData.notes || ''
      });
    }
    this.linkedItems.authors.displayLink = false;
  }

/**
 * Removes an item that was set to be linked
 * 
 * @param id - ID of the item
 */
removeAuthor(id: number) {
  // remove the item
  this.linkedItems.authors.itemsToLink = this.linkedItems.authors.itemsToLink.filter(obj => {
    return obj.id != id;
  });
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
  for (let itemToLink of this.linkedItems.genres.itemsToLink) {
    if (itemToLink.id == itemData.id) {
      isDuplicate = true;
    }
  }
  // push new object
  if (!isDuplicate) {
    this.linkedItems.genres.itemsToLink.push({
      id: itemData.id,
      genre: itemData.genre,
      notes: itemData.notes || ''
    });
  }
  this.linkedItems.genres.displayLink = false;
}

  /**
   * Removes an item that was set to be linked.
   * 
   * @param id - ID of the item
   */
  removeGenre(id: number) {
    // remove the item
    this.linkedItems.genres.itemsToLink = this.linkedItems.genres.itemsToLink.filter(obj => {
      return obj.id != id;
    });
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
    for (let itemToLink of this.linkedItems.narrations.itemsToLink) {
      if (itemToLink.id == itemData.id) {
        isDuplicate = true;
      }
    }
    // push new object
    if (!isDuplicate) {
      this.linkedItems.narrations.itemsToLink.push({
        id: itemData.id,
        narration: itemData.narration,
        notes: itemData.notes || ''
      });
    }
    this.linkedItems.narrations.displayLink = false;
  }

  /**
  * Removes an item that was set to be linked.
  * 
  * @param id - ID of the item
  */
  removeNarration(id: number) {
  // remove the item
  this.linkedItems.narrations.itemsToLink = this.linkedItems.narrations.itemsToLink.filter(obj => {
    return obj.id != id;
  });
  }
}
