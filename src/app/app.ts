import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar-component/search-bar-component';
import { ChangeDetectorRef } from '@angular/core';
import { Itunes } from './services/itunes';

export interface Song{
  trackId: number;
  trackName: string;
  artworkUrl100: string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(
    private itunesService: Itunes,
    private cdr: ChangeDetectorRef
  ) {}
  protected readonly title = signal('AlbumSearch');
  searchTerm2: string = '';
  songs: any[] = [];
  onSearch(name: string): void {
    console.log('RECEIVED:', name);
    this.searchTerm2 = name;
    this.itunesService.searchArtist(name).subscribe(response => {
      console.log('RESULTS:', response.results.length);
      this.songs = [...response.results];
      this.cdr.detectChanges();
    });
  }
}
