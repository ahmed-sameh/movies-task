import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/core/models/movie.model';
import { ErrorHandlingService } from 'src/app/core/services/error-handling/error-handling.service';
import { MoviesService } from 'src/app/core/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  title = 'movies'
  constructor(private moviesService: MoviesService,
     private errorService: ErrorHandlingService,
     private activated: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activated.params.subscribe(param => {
      if(param['id']){
        this.moviesService.getMoviesByCat(param['id']).subscribe(res => {
            this.movies = res.message
          })
      }else {
        this.getAllMovies();
      }
    })

    this.moviesService.moviesChanged.subscribe(() => window.location.reload())
  }

  getAllMovies() {
    this.moviesService.getAllMovies().subscribe({
      next: res => this.movies = res.message,
      error: error => this.errorService.errorOccured.next(error.error.message)
    })
  }

  onShowDetails(movieId: number) {
    this.moviesService.getMovieDetails(movieId).subscribe(res => {
      this.moviesService.showMovieDetails.next(res)
    })

  }

  onCreateMovie() {
    this.moviesService.createMovieHandler.next(true);
  }
}
