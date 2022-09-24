import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../../models/category.model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public showCatDetails = new Subject<Category>();
  public categoriesChanged = new Subject<Category>();

  constructor(private http: HttpService) { }

  getAllCategories() {
    return this.http.get('category')
  }

  updateCategory(newCat: Category, catId: number) {
    return this.http.post(newCat, `category/${catId}`)
  }

  showCategory(catId: number) {
    return this.http.get(`category/${catId}`)
  }
}
