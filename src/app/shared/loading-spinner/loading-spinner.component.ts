import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-loading-spinner',
  template: `
  <div class="background" *ngIf="loading"></div>
  <div class="lds-dual-ring" *ngIf="loading"></div>
  `,
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent  {

  loading: boolean = true;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

}
