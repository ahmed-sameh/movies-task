import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   api = "https://test-api.storexweb.com/api/";

   httpHeaders = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      "device-name": "chrome",
      "device-os-version": "windows",
      
    })
  };

  constructor(private http: HttpClient) {
    
  }

  get(url: string): Observable<any> {
    return this.http.get(`${this.api}${url}`, this.httpHeaders);
  }

  post(body: any = {},url?: string) {

    return this.http.post(
      `${this.api}${url}`,
      body,
      this.httpHeaders
    );
  }




}
