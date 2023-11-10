import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-narration-add-view',
  templateUrl: './narration-add-view.component.html',
  styleUrls: ['./narration-add-view.component.scss']
})
export class NarrationAddViewComponent {

  constructor(
    private _router: Router
  ) { }

    /**
   * Event handler called when add widget emits an added item. Navigates
   * to the list view for items.
   * @param item - Object containing added item info
   */
    itemAdded(item: any) {
      this._router.navigate(['/narrations/' + item.id.toString()]);
    }
}
