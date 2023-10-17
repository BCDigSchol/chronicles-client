import { Component, Output, EventEmitter } from '@angular/core';

import { Settings } from '../../../app.settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // signal sent back to app component when nav menu is toggled
  @Output() navMenuToggle = new EventEmitter<string>();
  // general app settings, for title and byline info
  settings = Settings;

  /**
   * Calls event emitter to signal when nav men button was toggled
   */
  toggleNav() {
    this.navMenuToggle.emit();
  }

}
