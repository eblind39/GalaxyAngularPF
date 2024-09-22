import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PexelsService } from '../../services/pexels.service';
import { IPhoto } from '../../models/photo.interface';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css'
})
export class PhotoCardComponent implements OnInit {

  photos: IPhoto[] = [];
  errorEndPoint: boolean = false;

  constructor(private pexelsService: PexelsService) { }

  ngOnInit(): void {
    console.log(`this is a super bowl`);
    this.pexelsService.getPageData(1, 2).subscribe(pageData => {
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
}
