import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  declarations: [LoadingSpinnerComponent, ErrorMessageComponent],
  imports: [
    CommonModule,
  ],
  exports: [LoadingSpinnerComponent, ErrorMessageComponent]
})
export class SharedModule { }