import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { StoreManagerProfileComponent } from './components/store-manager-profile/store-manager-profile.component';
import { ClientProfileService } from './services/client-profile/client-profile.service';
import { StoreService } from '../stores/services/store/store.service';


@NgModule({
  declarations: [
    ProfileComponent,
    ClientProfileComponent,
    ProfileEditComponent,
    StoreManagerProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [
    ClientProfileService,
    StoreService
  ]
})
export class ProfileModule { }
