import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
    // 404 image, from assets
    imgs = {
      404: '/assets/images/404.png'
    };

}
