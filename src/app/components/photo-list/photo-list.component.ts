import { Component, OnInit } from '@angular/core';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { IPhoto } from '../../models/photo.interface';
import { PexelsService } from '../../services/pexels.service';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [
    PhotoCardComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
  ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent  implements OnInit {

  photos: IPhoto[] = [];
  errorEndPoint: boolean = false;

  // pagination properties
  length = 50;
  pageSize = 24;
  pageIndex = 0;
  pageSizeOptions = [4, 16, 24, 52];

  constructor(private pexelsService: PexelsService) { }

  ngOnInit(): void {
    this.pexelsService.getPageData(1, this.pageSize).subscribe(pageData => {
      console.log(pageData);
      this.photos = pageData.photos;
      this.length = pageData.total_results;
      this.errorEndPoint = false;
    }, error => {
      console.log(`Error: ${error}`);
      this.errorEndPoint = true;
    })
  }

  getRealPhotoName(photoURL: string): string {
    return this.pexelsService.getRealPhotoName(photoURL);
  }

  getPhotographerUserName(photographerURL: string): string {
    return this.pexelsService.getPhotographerUserName(photographerURL);
  }

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.pexelsService.getPageData(this.pageIndex + 1, this.pageSize).subscribe(pageData => {
      console.log(pageData);
      this.photos = pageData.photos;
      this.length = pageData.total_results;
      this.errorEndPoint = false;
    }, error => {
      console.log(`Error: ${error}`);
      this.errorEndPoint = true;
    })
  }

}