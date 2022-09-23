import { Component, OnInit } from '@angular/core';
import { ErrorHandlingService } from 'src/app/core/services/error-handling/error-handling.service';

@Component({
  selector: 'app-error-message',
  template: `
  <div class="background" *ngIf="errorOccoured"></div>
  <div class="error-block"  *ngIf="errorOccoured" (click)="errorOccoured = false">
    <button type="button" class="btn-close" aria-label="Close"></button>
    <div class="content">
      <img src="assets/imgs/wrong.png" alt="icon">
      <h3>error occured</h3>
      <p class="errror-message"> {{ errorMessage }} </p>
    </div>
  </div>
  `,
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  errorOccoured = false;
  errorMessage = 'error occoures'

  constructor(private errorServices: ErrorHandlingService) { }

  ngOnInit(): void {
    this.errorServices.errorOccured.subscribe(msg => {
      this.errorMessage = msg;
      this.errorOccoured = true
    })
  }

}
