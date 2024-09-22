import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PhotoCardComponent,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GalaxyAngularPF';
}
