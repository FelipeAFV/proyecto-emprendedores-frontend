import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRole } from 'src/app/model/app-role';
import { environment } from 'src/environments/environment';
import { ProfileCreateData } from '../../interfaces/profile-create-data';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  hasProfileWithRole(profile: AppRole) {
    return this.http.get(`${environment.ApiUrl}/profiles/hasProfile/${profile}`, {withCredentials: true});
  }

  changeToProfileWithRole(role: AppRole) {
    return this.http.post(`${environment.ApiUrl}/profiles/changeProfile`, {role: role}, {withCredentials: true});

  }

  addProfile(body : ProfileCreateData) {
    return this.http.post(`${environment.ApiUrl}/profiles`, body, {withCredentials: true});
  }
}
