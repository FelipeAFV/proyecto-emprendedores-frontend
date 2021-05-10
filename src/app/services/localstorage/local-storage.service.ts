import { Injectable } from '@angular/core';
import { Profile } from 'src/app/model/profile';
import { StorageVariables } from "src/app/model/storage-variables";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setProfile(profile: Profile) {
    localStorage.setItem(StorageVariables.CURRENT_PROFILE, JSON.stringify(profile));
  }

  getCurrentProfile(): Profile | null {
    return JSON.parse(localStorage.getItem(StorageVariables.CURRENT_PROFILE));
  }

}
