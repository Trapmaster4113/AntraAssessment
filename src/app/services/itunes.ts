import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Itunes {
  constructor(private http: HttpClient) {}

  searchArtist(artist: string): Observable<any> {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&entity=song`;
    return this.http.get<any>(url);
  }
}
