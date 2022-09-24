import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public showMovieDetails = new Subject<Movie>();
  public moviesChanged = new Subject<void>();
  public createMovieHandler = new Subject<boolean>();
  constructor(private http: HttpService) { }

  getAllMovies() {
    return this.http.get('movies')
  }

  getMoviesByCat(catId:string) {
    return this.http.get(`moviesByCategory/${catId}`)
  }

  updateMovie(newMovie: FormData, movieId: number) {
    return this.http.postFormData(`movies/${movieId}`, newMovie);
  }
  
  createMovie(newMovie: FormData) {
    return this.http.postFormData(`movies`,newMovie)
  }
  
  deleteMovie(movieId:number) {
    return this.http.post({_method: 'delete'}, `movies/${movieId}`)
  }

  getMovieDetails(movieId: number) {
    return this.http.get(`movies/${movieId}`)
  }
}
