import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication-details-view',
  templateUrl: './publication-details-view.component.html',
  styleUrls: ['./publication-details-view.component.scss']
})
export class PublicationDetailsViewComponent implements OnInit {
    // item id & loading flag
    itemId: any;
    loading: boolean = true;

    constructor(
      private _route: ActivatedRoute
    ) { }
  
    /**
     * Gets item ID from route snapeshot and sets .loading to false
     */
    ngOnInit(): void {
      this.itemId = this._route.snapshot.paramMap.get('id');
      this.loading = false;
    }
}
