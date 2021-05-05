import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(body) {
    return this.http.post(`${environment.AuthUrl}/signUp`, body, {
      withCredentials: true
    });
  }

  signIn(body) {
    console.log(environment.AuthUrl);
    return this.http.post(`${environment.AuthUrl}/signIn`, body, {
      withCredentials: true
    })
  }
}
