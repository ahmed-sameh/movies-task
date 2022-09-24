import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpService) { }

  getAllMovies() {
    return this.http.get('movies')
  }
}
