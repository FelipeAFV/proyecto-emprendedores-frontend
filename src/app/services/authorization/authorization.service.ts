import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRole } from 'src/app/model/app-role';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  hasRole(role: AppRole) {
    return this.http.get(`${environment.ApiUrl}/profiles/hasProfile/${role}`, {withCredentials: true});
  }
}
