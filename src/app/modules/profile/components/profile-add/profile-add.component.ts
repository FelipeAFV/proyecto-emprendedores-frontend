import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRole } from 'src/app/model/app-role';
import { Profile } from 'src/app/model/profile';
import { LocalStorageService } from 'src/app/services/localstorage/local-storage.service';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.css']
})
export class ProfileAddComponent implements OnInit {

  addProfileForm: FormGroup;

  isStoreManagerRequest: boolean;

  availableProfiles = { admin: AppRole.ADMIN, client: AppRole.CLIENT, storeManager: AppRole.STORE_MANAGER};

  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService, private router: Router,
      private localStorageService: LocalStorageService) {
    activatedRoute.data.subscribe((data) => {
      this.isStoreManagerRequest = data.isStoreManagerRequest;
    })
  }

  ngOnInit(): void {

    const currentProfile: Profile = this.localStorageService.getCurrentProfile();
    const role = this.isStoreManagerRequest ? this.availableProfiles.storeManager : null;

    this.addProfileForm = new FormGroup({
      role: new FormControl(role, Validators.required),
      email: new FormControl(null, Validators.required),
      lastName: new FormControl(currentProfile.lastName, Validators.required),
      firstName: new FormControl(currentProfile.firstName, [Validators.required, Validators.email])
    });

  }

  createProfile() {
    this.profileService.addProfile(this.addProfileForm.value).subscribe(
      (data: any) => {
        this.localStorageService.setProfile(data.profile);
        this.router.navigate(['profile']);
        console.log(data);
      },
      (err) => {
        alert(err);
        console.log(err);
      }
    );
  }
}
