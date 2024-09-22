import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaginationData } from '../models/paginationdata.interface';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {
  // https://api.pexels.com/v1/curated?page=1&per_page=5

  private urlPagination: string = 'https://api.pexels.com/v1/curated';
  private APIkey: string = 'rhot2eYrbKdXn3uaUYnBqcvldQ6iH5O5MAOjHJxOCudWFkC9ST8NXE9A';

  constructor(private http: HttpClient) { }

  getPageData(page: number, per_page: number): Observable<IPaginationData> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Authorization', this.APIkey);

    const pexelsURL:string = `${this.urlPagination}?page=${page}&per_page=${per_page}`;
    return this.http.get<IPaginationData>(pexelsURL, {
      headers: httpHeaders
    });
  }

  getRealPhotoName(photoURL: string): string {
    const matchRegEx = /-(\d+)\//i;
    photoURL = photoURL.replace('https://www.pexels.com/photo/', '');
    photoURL = photoURL.replace(matchRegEx, '');
    photoURL = photoURL.replaceAll('-', ' ');
    photoURL = photoURL.charAt(0).toUpperCase() + photoURL.slice(1);

    return `${photoURL}`;
  }
}