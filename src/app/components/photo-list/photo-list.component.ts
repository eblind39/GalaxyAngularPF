import { Component, OnInit } from '@angular/core';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { IPhoto } from '../../models/photo.interface';
import { PexelsService } from '../../services/pexels.service';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [PhotoCardComponent],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent  implements OnInit {

  photos: IPhoto[] = [];
  errorEndPoint: boolean = false;

  constructor(private pexelsService: PexelsService) { }

  ngOnInit(): void {
    this.pexelsService.getPageData(1, 10).subscribe(pageData => {
      console.log(pageData);
      this.photos = pageData.photos;
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
}