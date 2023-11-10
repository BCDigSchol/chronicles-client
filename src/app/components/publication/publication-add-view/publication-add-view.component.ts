import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication-add-view',
  templateUrl: './publication-add-view.component.html',
  styleUrls: ['./publication-add-view.component.scss']
})
export class PublicationAddViewComponent {

  constructor(
    private _router: Router
  ) { }

    /**
   * Event handler called when add widget emits an added item. Navigates
   * to the list view for items.
   * @param item - Object containing added item info
   */
    itemAdded(item: any) {
      this._router.navigate(['/publications/' + item.id.toString()]);
    }

}
