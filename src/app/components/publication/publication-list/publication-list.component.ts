import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent implements OnInit {
  // id of items from server to list
  protectedData: any[] = [];
  // total count of items
  totalItems: any;

  // fields to send to the filter widget
  filterFields = [{
    keyword: 'title',
    label: 'Title'
  }, {
    keyword: 'subtitle',
    label: 'Subtitle'
  }, {
    type: 'range',
    keywordStart: 'startDate',
    keywordEnd: 'endDate',
    label: 'Year',
    min: 1800, max: 2025
  },{
    keyword: 'genre',
    label: 'Genre'
  }, {
    keyword: 'narration',
    label: 'Narration'
  }, {
    keyword: 'settingName',
    label: 'Setting'
  }, {
    keyword: 'settingCategory',
    label: 'Setting Category'
  }, {
    keyword: 'period',
    label: 'Period'
  }, {
    keyword: 'timeScale',
    label: 'Time Scale'
  }, {
    keyword: 'protagonistCategory',
    label: 'Protagonist Type'
  }, {
    keyword: 'protagonistGroupType',
    label: 'Protagonist Group'
  }, {
    keyword: 'surname',
    label: 'Author Surname'
  }];

  // strings to filter results by (server-side)
  filterValues: any = {
    title: '',
    subtitle: '',
    startYear: null,
    endYear: null,
    settingName: '',
    settingCategory: '',
    period: '',
    timeScale: '',
    protagonistCategory: '',
    protagonistGroupType: '',
    genre: '',
    narration: '',
    surname: ''
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
    // get all filter parameters from query string
    this._route.queryParamMap
      .subscribe((params) => {
        for (let parameter of params.keys) {
          this.filterValues[parameter] = params.get(parameter)
        }
      }
    );
    this.refreshData();
  }

  /**
   * Navigates router to specific sub item via specified path
   * 
   * @param path - path to item
   */
  navigate(path: string) {
    this._router.navigate(['/publications/' + path]);
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
    let requestString: string = 'publications/?';
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
