import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-narration-list',
  templateUrl: './narration-list.component.html',
  styleUrls: ['./narration-list.component.scss']
})
export class NarrationListComponent implements OnInit {
  // id of items from server to list
  protectedData: any[] = [];
  // total count of items
  totalItems: any;

  // fields to send to the filter widget
  filterFields = [{
    keyword: 'narration',
    label: 'Narration'
  }];

  // strings to filter results by (server-side)
  filterValues: any = {
    narration: ''
  };

  filterHidden: boolean = true;
  // pagination data
  currentPage = 1;
  itemsPerPage = 5;
  // loading & error messages
  loading: boolean = true;
  loadingError: boolean = false;

  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  /**
   * Initialize pagination data and refresh data from server.
   */
  ngOnInit(): void {
    this.currentPage = 1;
    this._route.queryParamMap
    .subscribe((params) => {
      for (let parameter of params.keys) {
        this.filterValues[parameter] = params.get(parameter)
      }
    });
    this.refreshData();
  }

  /**
   * Navigates router to specific sub item via specified path
   * 
   * @param path - path to item
   */
  navigate(path: string) {
    this._router.navigate(['/narrations/' + path]);
  }

  /**
   * Executed upon event emission by child filter widget. Copies
   * data from emitted object to filter fields.
   * 
   * @param filterInfo - Object with fields corresponding to each filter
   */
  updateFilter(filterInfo: any) {
    for (let key in filterInfo) {
      this.filterValues[key] = filterInfo[key];
    }
    this.refreshData();
  }

  /** 
   * Executed upon event emission by child filter widget. Toggles
   * the display status of filter to update CSS classes for 
   * padding.
   * 
   * @param displayStatus - Boolean of new filter display status
   */
  toggleFilter(displayStatus: boolean) {
    this.filterHidden = displayStatus;
  }

  /**
   * Returns true if any of the filters are set, otherwise false
   */
    isFiltered() {
      for (let key in this.filterValues) {
        if(this.filterValues[key] != '') {
          return true;
        }
      }
      return false;
    }
  
    /** Clears the filter */
    clearFilter() {
      for (let key in this.filterValues) {
        this.filterValues[key] = '';
      }
      this.refreshData();
    }

  /**
   * Executed upon event emission from child pagination widget.
   * Gets PageEvent from child widget and applies it to
   * component, then refreshes data.
   * 
   * @param e - PageEvent containing new index and size
   */
  changePagination(e: PageEvent) {
    this.currentPage = e.pageIndex + 1;
    this.itemsPerPage = e.pageSize;
    this.refreshData();
  }

  /**
   * Gets data from server (replacing any previously fetched data).
   * First builds the request string, which will include current pagination
   * information, as well as any specified filter strings for server-side
   * filtering. Then performs the request, stores the data, and sets .loading
   * to false.
   */
  refreshData() {
    let requestString: string = 'narrations/?';
    requestString += 'page=' + (this.currentPage - 1) +  '&size=' + this.itemsPerPage;
    for (let key in this.filterValues) {
      if (this.filterValues[key] && this.filterValues[key] != '') {
        requestString += '&' + key + '=' + this.filterValues[key]
      }
    }
    this._api.getTypeRequest(requestString).subscribe({
      next: (res: any) => {
        this.protectedData = res.rows;
        this.totalItems = res.count;
        this.loading = false;
      },
      error: (error: any) => {
        this.loadingError = true;
      }
    });
  }
}