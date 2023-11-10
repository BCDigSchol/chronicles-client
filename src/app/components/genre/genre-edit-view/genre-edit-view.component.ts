import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre-edit-view',
  templateUrl: './genre-edit-view.component.html',
  styleUrls: ['./genre-edit-view.component.scss']
})
export class GenreEditViewComponent implements OnInit {
  // item id & loading flag
  itemId: any;
  loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  /**
   * Gets item ID from route snapeshot and sets .loading to false
   */
  ngOnInit(): void {
    this.itemId = this._route.snapshot.paramMap.get('id');
    this.loading = false;
  }
}
