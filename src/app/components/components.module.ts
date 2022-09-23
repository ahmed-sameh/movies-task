import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    MoviesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
