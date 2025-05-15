import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-narration-edit-view',
  templateUrl: './narration-edit-view.component.html',
  styleUrls: ['./narration-edit-view.component.scss']
})
export class NarrationEditViewComponent implements OnInit {
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
