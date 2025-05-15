import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ApiService } from './../../../services/api.service';

interface Genre {
  id: number;
  surname: string;
  otherNames: string;
  maidenName: string;
  label: string;
  gender: string;
  nationality: string;
  specificNationality: string;
  nonPerson: boolean;
  notes: string;
}
@Component({
  selector: 'app-author-select',
  templateUrl: './author-select.component.html',
  styleUrls: ['./author-select.component.scss']
})
export class AuthorSelectComponent implements OnInit {
// event emitter
@Output() successfullyAdded = new EventEmitter<string>();
// optional, if provided only allow selection from items with matching ids
@Input() idsToRestrictTo: number[] = [];
// optional, if provided filter items with matching ids from selection
@Input() restrictedIds: number[] = [];

// loading flag & error messages
loading: boolean = true;
errorMsgs: string[] = [];
serverErrorMsgs: string[] = [];
// selected item
selectedItem: any;
// all possible items
acceptableItems: Genre[] = [];
// add new item flag
displayAddItem: boolean = false;
// filter
filterBySurname: string = '';
filterIsHidden: boolean = true;

publishedHonorific: string = '';
publishedName: string = '';

constructor(
  private _api: ApiService
) { }

ngOnInit(): void {
  this.refreshData();
}

/**
 * Refreshes data from server and stores in acceptable items. Uses
 * pagination and filter information to only retrieve pertinent items.
 * Also calculates total number of items and sets loading to false.
 */
  refreshData() {
    let requestString: string = 'authors/?';
    if (this.filterBySurname) {
      requestString += 'surname=' + this.filterBySurname;
    }
    this._api.getTypeRequest(requestString).subscribe((res: any) => {
      this.acceptableItems = res;
      this.loading = false;
    });
  }

/**
 * On selection, emits the data of the selected item.
 */
onSubmit() {
  let itemToAdd: any;
  for (let item of this.acceptableItems) {
    if (item.id == this.selectedItem) {
      itemToAdd = item;
    }
  }
  itemToAdd.publishedHonorific = this.publishedHonorific;
  itemToAdd.publishedName = this.publishedName;
  this.successfullyAdded.emit(itemToAdd);
}

  /**
 * Executes when add item widget emits an event handler. Refreshes data,
 * sets the selected item to the added item, toggles the display add item
 * to false, and itself emits the selection to any parent (but only
 * if the includeRole inputs is false).
 * 
 * @param item - the data of the added item, emitted by a child widget
 */
  itemAdded(item: any) {
    this.refreshData();
    this.selectedItem = item.id;
    this.displayAddItem = false;
    this.successfullyAdded.emit(item);
  }

/**
 * Toggles whether to display/hide the add item widget.
 */
toggleDisplayAddItem() {
  this.displayAddItem = !this.displayAddItem;
}

/**
 * Toggles whether or not to show the filter
 */
toggleFilter() {
  this.filterIsHidden = !this.filterIsHidden;
}
}
