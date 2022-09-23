import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [    
    LayoutComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,FontAwesomeModule
  ]
})
export class LayoutModule { }
