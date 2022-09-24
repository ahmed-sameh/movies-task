
import {  Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { MoviesService } from 'src/app/core/services/movies/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  imageUrl?:File;
  selectedCar?: number;
  selected?:string
  showCreate = false
  categories: Category[] = [];
  constructor(
     private CategoryServices: CategoriesService,
     private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.createMovieHandler.subscribe(res => {
      this.getCategories()
      this.showCreate = res
    })
  }

  getCategories() {
    this.CategoryServices.getAllCategories().subscribe(res => this.categories = res.message)
  }

    

  uploadImage(event: any) {
    const files = event.target.files;
    this.imageUrl = files[0];
   }
    
  onCreateMovie(movieInfo: NgForm) {
    const movie = movieInfo.value;
    const formData = new FormData();
    formData.append('name', movie.name);
    formData.append('image', this.imageUrl!);
    formData.append('category_id', movie.category_id);
    formData.append('description', movie.description);

    this.moviesService.createMovie(formData).subscribe((res: any) => {
      if(res.status === "success") {
        this.showCreate = false;
        this.moviesService.moviesChanged.next()
      }
    })
  }


}
