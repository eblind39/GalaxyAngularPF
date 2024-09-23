import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BannerComponent,SearchBarComponent,PhotoCardComponent,PhotoListComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GalaxyAngularPF';
}