import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar-component',
  imports: [FormsModule],
  templateUrl: './search-bar-component.html',
  styleUrl: './search-bar-component.scss',
})
export class SearchBarComponent {
  searchTerm: string = '';
  albums: number = 0;
  @Output() searchTermChanged = new EventEmitter<string>();
  search(): void{
    this.searchTermChanged.emit(this.searchTerm);
  }
}
