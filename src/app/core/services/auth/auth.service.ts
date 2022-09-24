import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlingService } from '../error-handling/error-handling.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService, private Router: Router, private errorService: ErrorHandlingService) { 
    this.isAuthenticated()
  }

  login(body:{email: string, password:string}) {
    this.http.post(body, 'login').subscribe({
      next: (res: any) => {

        localStorage.setItem('user', JSON.stringify(res.authorisation))

        this.Router.navigate(['movies'])
      },
      error: error => this.errorService.errorOccured.next(error.error.message)

    })

  }

  register(body:{name: string, email: string, password:string}) {
    this.http.post(body, 'register').subscribe({
      next: (res: any) => {
        if(res.status === 'success') {
          localStorage.setItem('user', JSON.stringify(res.authorisation))

          this.Router.navigate(['movies'])
        }else {
          this.errorService.errorOccured.next(res.message.email[0])
        }
      },
      error: error => this.errorService.errorOccured.next(error.error.message)

    })

  }

  logout() {
    this.Router.navigate(['/auth']);
    localStorage.removeItem('user')
  }

  isAuthenticated() {
    const user = localStorage.getItem('user');   
    return (user !== null)
  }
  
  getAuthToken() {
    const user = JSON.parse(localStorage.getItem('user')!);   
    return user ? `${user.type} ${user.token}`  : ''
  }

} 
