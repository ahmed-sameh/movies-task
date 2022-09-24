import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { ErrorHandlingService } from 'src/app/core/services/error-handling/error-handling.service';
import { MoviesService } from 'src/app/core/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []
  constructor(private moviesService: MoviesService, private errorService: ErrorHandlingService) { }

  ngOnInit(): void {
    this.getAllMovies()
  }

  getAllMovies() {
    this.moviesService.getAllMovies().subscribe({
      next: res => this.movies = res.message,
      error: error => this.errorService.errorOccured.next(error.message)
    })
  }

}
