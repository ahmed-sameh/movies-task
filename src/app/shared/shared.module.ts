import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [LoadingSpinnerComponent, ErrorMessageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [LoadingSpinnerComponent, ErrorMessageComponent, FontAwesomeModule]
})
export class SharedModule { }
