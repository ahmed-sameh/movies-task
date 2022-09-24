import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/core/models/category.model';
import { Movie } from 'src/app/core/models/movie.model';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { MoviesService } from 'src/app/core/services/movies/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  categories: Category[] = [];
  movieInfo: Movie= {};
  showDetails = false;
  showUpdateForm = false;
  imageUrl?:File
  constructor(private movieService: MoviesService,
     private CategoryServices: CategoriesService
    ) { }

  ngOnInit(): void {
    this.movieService.showMovieDetails.subscribe(movieData => {
      this.movieInfo = movieData;
      this.showDetails = true;
      this.getCategories()
    })
  }
 
  getCategories() {
    this.CategoryServices.getAllCategories().subscribe(res => this.categories = res.message)
  }

  onUpdateMovie(form: NgForm) {
    const newMovie = form.value;
  
    const formData = new FormData()
    formData.append('name', newMovie.name)
    formData.append('image', this.imageUrl!)
    formData.append('category_id', newMovie.category_id)
    formData.append('description', newMovie.description)
    formData.append('_method', "put")

    this.movieService.updateMovie(formData, this.movieInfo.id!).subscribe((res: any) => {
      if(res.status === "success") {
        this.movieService.moviesChanged.next()
        this.onCloseDetails();
      }
    })
  }

  uploadImage(event: any) {
    const files = event.target.files;
    this.imageUrl = files[0];
  }

  onCloseDetails() {
    this.showDetails = false;
    this.showUpdateForm = false
  }

  onDeleteMovie() {
    this.movieService.deleteMovie(this.movieInfo.id!).subscribe(() => {
      this.movieService.moviesChanged.next();
      this.onCloseDetails()
    })
  }
}