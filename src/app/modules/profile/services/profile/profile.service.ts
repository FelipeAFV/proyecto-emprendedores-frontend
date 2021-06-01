import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRole } from 'src/app/model/app-role';
import { Profile } from 'src/app/model/profile';
import { StorageVariables } from 'src/app/model/storage-variables';
import { environment } from 'src/environments/environment';
import { ProfileCreateData } from '../../interfaces/profile-create-data';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getCurrentProfile() : Profile {
    return JSON.parse(localStorage.getItem(StorageVariables.CURRENT_PROFILE));
  }

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
