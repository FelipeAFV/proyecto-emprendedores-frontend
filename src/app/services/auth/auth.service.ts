import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(body) {
    return this.http.post('http://localhost:3000/api/login/signUp', body, {
      withCredentials: true
    });
  }
}
