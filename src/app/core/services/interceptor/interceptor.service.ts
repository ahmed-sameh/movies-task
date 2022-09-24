import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import {  Router } from '@angular/router';
import { LoaderService } from './../loader/loader.service';


@Injectable()
export class Interceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  constructor(
    private router: Router,
    private loaderService: LoaderService
  ) {}

  setToken() {
    if(localStorage.getItem('user')) {
      return `${JSON.parse(localStorage.getItem('user')!).type} ${JSON.parse(localStorage.getItem('user')!).token}`
    }else {
      return ''
    }
  }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req.clone({headers: req.headers.append("Authorization", this.setToken())});

    this.requests.push(req);
    this.loaderService.isLoading.next(true);

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.status === 200) {
              this.removeRequest(req);
            } else if (event.status === 403 || event.status === 401) {
              localStorage.removeItem('user');
              this.router.navigate(['/auth']);
              this.removeRequest(req);
            }
          }
        },
        (err: any) => {
          this.removeRequest(req);

          if (err instanceof HttpErrorResponse) {
            if (err.error.message === 'Unauthenticated') {
              localStorage.removeItem('user');
              this.router.navigate(['/auth']);
            }
            if (err.status == 403 || err.status == 401) {
              localStorage.removeItem('user');
              this.router.navigate(['/auth']);
              this.removeRequest(req);
            }
          }
          this.removeRequest(req);

          return of(err);
        }
      )
    );
  }
}

