import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { ErrorHandlingService } from 'src/app/core/services/error-handling/error-handling.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  settingIcon = faPenToSquare
  constructor(private categoryService: CategoriesService, private errorService: ErrorHandlingService) { }

  ngOnInit(): void {
    this.getAllCat();
    this.categoryService.categoriesChanged.subscribe(() => this.getAllCat())
  }
  
  getAllCat() {   
    this.categoryService.getAllCategories().subscribe({
      next: res => this.categories = res.message,
      error: error => this.errorService.errorOccured.next(error.error.message)
    })
  }

  onShowDetails(catId: number) {
    this.categoryService.showCategory(catId).subscribe(res => {
      this.categoryService.showCatDetails.next(res.message)
    })
  }

}
