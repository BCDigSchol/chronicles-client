import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ApiService } from './../../services/api.service';

interface fileHrefs {
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
 tableMap = [
  'publications',
  'authors',
  'genres',
  'narrations',
  'authorsOfPublications',
  'genresOfPublications',
  'narrationsOfPublications'
 ]
 format = 'json';

 constructor(
   private _api: ApiService,
   private sanitizer: DomSanitizer
 ) { }

 /**
  * Makes server request for export data, stores it, creates
  * download links for JSONs from data, and .loading to false.
  */
 ngOnInit(): void {
   this.loading = false;
 }

 toggleFormat() {
    if (this.format === 'json') {
      this.format = 'csv';
    }
    else {
      this.format = 'json';
    }
 }

 downloadTable(table: any) {
  const options = this.format === 'csv' ? { responseType: 'text' as 'text' } : {};
  console.log('Downloading table:', `export?table=${table}&format=${this.format}`);
  this._api.getTypeRequest(`export?table=${table}&format=${this.format}`, options).subscribe({
    next: (res: any) => {
      let dataStr: string;
      let mimeType: string;
      let fileExt: string;

      if (this.format === 'json') {
        dataStr = JSON.stringify(res, null, 2);
        mimeType = 'application/json';
        fileExt = 'json';
      } else {
        dataStr = typeof res === 'string' ? res : '';
        mimeType = 'text/csv';
        fileExt = 'csv';
      }


      const blob = new Blob([dataStr], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${table}.${fileExt}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    },
    error: (error: any) => {
      console.log('Error downloading file:', error);
      this.loadingError = true;
      this.errMsg = 'Error downloading file';
    }
  });
 }

}
