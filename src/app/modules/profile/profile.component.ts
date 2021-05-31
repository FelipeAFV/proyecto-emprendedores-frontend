import { PlatformLocation } from '@angular/common';
import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppRole } from '../../model/app-role';
import { LocalStorageService } from '../../services/localstorage/local-storage.service';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { CanRenderService } from './services/can-render/can-render.service';
import { ProfileService } from './services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterContentInit, OnChanges{

  @Input()
  personName: string;

  @ViewChild(ClientProfileComponent)
  clientComponent: ViewChild;

  email: string;
  modeToChange: string;
  roleToChange: AppRole;

  constructor(private localStorageService: LocalStorageService, private profileService: ProfileService, private router: Router, private platformLocation: PlatformLocation, private canRenderService: CanRenderService) {
    this.loadProfileData();
    console.log('Profile constructor');
    this.canRenderService.allowRender();
    this.platformLocation.onPopState(() => {
      if (this.router.url.includes('profile')) this.hasProfile(this.roleToChange);
      
    
    });
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    // this.canRenderService.allowRender();
  }
  ngAfterContentInit(): void {
    
  }

  ngOnInit(): void {
  }
  
  hasProfile(profile: AppRole) {
    console.log('Ejecutando has profile');
      this.profileService.hasProfileWithRole(profile).subscribe(
        () => {
          this.profileService.changeToProfileWithRole(profile).subscribe(
            (data: any) => {
              console.log(data.message);
              this.localStorageService.setProfile(data.profile);
              console.log('Rol Actual ',this.localStorageService.getCurrentProfile().role);
              this.loadProfileData();
              if(profile === AppRole.CLIENT) {
                this.canRenderService.allowRender();
              }
  
              },
              (err) => {
                console.log(err);
              }
            );
        },
        (err) => {
          console.log(err);
          this.router.navigate(['profile/addStoreManager']);
        }
      );



    
    
  }

  loadProfileData() {
    console.log('Ejecutando load profile data');
    const profile = this.localStorageService.getCurrentProfile();
    this.personName = `${profile.firstName} ${profile.lastName}`;
    this.email = profile.email;
    switch (profile.role) {
      case AppRole.CLIENT:
        this.modeToChange = 'emprendedor'
        this.roleToChange = AppRole.STORE_MANAGER;
        this.router.navigate(['profile/client']);
        break;
        
        case AppRole.STORE_MANAGER:
          this.modeToChange = 'cliente'
          this.roleToChange = AppRole.CLIENT;
          this.router.navigate(['profile/storeManager']);
        break;
      
      default:
        break
    }
  }

}
