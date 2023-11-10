import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-add-view',
  templateUrl: './author-add-view.component.html',
  styleUrls: ['./author-add-view.component.scss']
})
export class AuthorAddViewComponent {

  constructor(
    private _router: Router
  ) { }

    /**
   * Event handler called when add widget emits an added item. Navigates
   * to the list view for items.
   * @param item - Object containing added item info
   */
    itemAdded(item: any) {
      this._router.navigate(['/authors/' + item.id.toString()]);
    }

}
