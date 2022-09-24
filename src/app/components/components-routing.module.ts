import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path: "movies", component: MoviesComponent},
  {path: "movies/:id", component: MoviesComponent},
  {path: "categories", component: CategoriesComponent},
  {path: "", redirectTo: "movies", pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ComponentsRoutingModule { }
