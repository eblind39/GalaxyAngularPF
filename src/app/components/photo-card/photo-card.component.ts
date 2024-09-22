import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css'
})
export class PhotoCardComponent {

  @Input() photoDescription!: string;
  @Input() photoImageURL!: string;
  @Input() photoURL!: string;
  @Input() photographerName!: string;
  @Input() photographerUserName!: string;
  @Input() photographerURL!: string;

  constructor() { }
  
}
