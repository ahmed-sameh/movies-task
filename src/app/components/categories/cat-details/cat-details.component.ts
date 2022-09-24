import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  catInfo: Category= {};
  showDetails = false;
  showUpdateForm = false;
  constructor(private catService: CategoriesService) { }

  ngOnInit(): void {
    this.catService.showCatDetails.subscribe(catData => {
      this.catInfo = catData;
      this.showDetails = true
    })
  }
 
  onUpdateCat(form: NgForm) {
    const newCat = form.value;
    newCat['_method'] = "put"
    this.catService.updateCategory( newCat ,this.catInfo.id!).subscribe((res: any) => {
      this.catInfo = res.status === "success" ? res.message : this.catInfo;
      this.catService.categoriesChanged.next(res.message)
    })
  }

  onCloseDetails() {
    this.showDetails = false;
    this.showUpdateForm = false
  }

}
