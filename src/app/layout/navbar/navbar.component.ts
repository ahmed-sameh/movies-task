import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = true;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  onLogout() {
    this,this.authService.logout()
  }

}
