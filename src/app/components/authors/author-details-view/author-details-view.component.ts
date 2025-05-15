import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-details-view',
  templateUrl: './author-details-view.component.html',
  styleUrls: ['./author-details-view.component.scss']
})
export class AuthorDetailsViewComponent implements OnInit {
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
