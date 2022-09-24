import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { CatDetailsComponent } from './categories/cat-details/cat-details.component';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MoviesComponent,
    CategoriesComponent,
    CatDetailsComponent,
    MovieDetailsComponent,
    CreateMovieComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    FormsModule,
    NgSelectModule
  ]
})
export class ComponentsModule { }
