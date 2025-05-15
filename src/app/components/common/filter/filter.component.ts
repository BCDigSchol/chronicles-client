import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // event emitters
  @Output() filterUpdated = new EventEmitter<string>();
  @Output() displayToggled = new EventEmitter<boolean>();
  // list of fields, each defined as object w key and label of each field
  // e.g. [{ keyword: 'title', label: 'Title' }, {...}]
  @Input() fields: any[] = [];
  // stores values of filters
  protectedData: any = {};
  isHidden: boolean = true;

  constructor() { }

  /**
   * Builds empty fields for input
   */
  ngOnInit(): void {
    this.clearInputFields();
  }

  /**
   * On component changes, re-build empty fields for input.
   * 
   * @param changes - Data on nature of component changes (unnecessary)
   */
  ngOnChanges(changes: SimpleChanges) {
    this.clearInputFields();
  }

  /**
   * Toggles the visibility of the filter fields in filterActive
   */
  toggleVisibility(field: any) {
    if (field.active === undefined) {
      field.active = true
    }
    else {
      field.active = !field.active;
    }
    this.updateFilter();
  }

  /**
   * Clears protectedData and uses .fields to recreate empty inputs at each keyword
   */
  clearInputFields() {
    this.protectedData = {};
    for (let field of this.fields) {
      if (field.active) {
        if (field.type === 'range') {
          this.protectedData[field.keywordStart] = field.min;
          this.protectedData[field.keywordEnd] = field.max;
        } else {
          this.protectedData[field.keyword] = '';
        }
      }
    }
  }

  /**
   * Upon update of input field, emits new data.
   */
  updateFilter() {
    // iterates over every property in this.filterActive, and if it is true, adds it to filterObj
    this.filterUpdated.emit(this.protectedData);
  }

  /**
   * Toggles the display of filter fields and emits
   * display status.
   */
  toggleDisplay() {
    this.isHidden = !this.isHidden;
    this.displayToggled.emit(this.isHidden);
  }
}
