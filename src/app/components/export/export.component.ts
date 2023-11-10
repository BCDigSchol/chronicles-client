import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ApiService } from './../../services/api.service';

interface jsonHrefs {
  publications: any;
  authors: any;
  genres: any;
  narrations: any;
  authorsOfPublications: any;
  genresOfPublications: any;
  narrationsOfPublications: any;
}

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
 // flags to store whether component has loaded fully and is error free
 loading: boolean = true;
 loadingError: boolean = false;
 errMsg: string = '';
 // property to store data retreived from server
 protectedData: any;
 // stores generated links for jsons created with downloaded server data
 downloadJsonHrefs: jsonHrefs = {
  publications: [],
  authors: [],
  genres: [],
  narrations: [],
  authorsOfPublications: [],
  genresOfPublications: [],
  narrationsOfPublications: []
 };

 constructor(
   private _api: ApiService,
   private sanitizer: DomSanitizer
 ) { }

 /**
  * Makes server request for export data, stores it, creates
  * download links for JSONs from data, and .loading to false.
  */
 ngOnInit(): void {
   this._api.getTypeRequest('export/').subscribe({
    next: (res: any) => {
      this.protectedData = res;
      this.generateDownloadJsonUri();
      this.loading = false;
    },
    error: (error: any) => {
      this.loadingError = true;
    }
   });
 }

 /**
  * Creates an object with links for each of the data tables
  */
 generateDownloadJsonUri() {
   var theJSON = null;
   var uri = null;

   theJSON = JSON.stringify(this.protectedData.publications);
   uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
   this.downloadJsonHrefs.publications = uri;
   theJSON = JSON.stringify(this.protectedData.authors);
   uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
   this.downloadJsonHrefs.authors = uri;
   theJSON = JSON.stringify(this.protectedData.genres);
   uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
   this.downloadJsonHrefs.genres = uri;
   theJSON = JSON.stringify(this.protectedData.narrations);
   uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
   this.downloadJsonHrefs.narrations = uri;
   theJSON = JSON.stringify(this.protectedData.authorsOfPublications);
   uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
   this.downloadJsonHrefs.authorsOfPublications = uri;
   theJSON = JSON.stringify(this.protectedData.genresOfPublications);
   uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
   this.downloadJsonHrefs.genresOfPublications = uri;
   theJSON = JSON.stringify(this.protectedData.narrationsOfPublications);
   uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
   this.downloadJsonHrefs.narrationsOfPublications = uri;
 }

}
