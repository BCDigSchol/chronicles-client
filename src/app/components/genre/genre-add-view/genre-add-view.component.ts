import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-add-view',
  templateUrl: './genre-add-view.component.html',
  styleUrls: ['./genre-add-view.component.scss']
})
export class GenreAddViewComponent {

  constructor(
    private _router: Router
  ) { }

    /**
   * Event handler called when add widget emits an added item. Navigates
   * to the list view for items.
   * @param item - Object containing added item info
   */
    itemAdded(item: any) {
      this._router.navigate(['/genres/' + item.id.toString()]);
    }

}
