import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { StoreManagerProfileComponent } from './components/store-manager-profile/store-manager-profile.component';
import { ClientProfileService } from './services/client-profile/client-profile.service';
import { StoreService } from '../../stores/services/store/store.service';
import { ProfileService } from './services/profile/profile.service';
import { ProfileAddComponent } from './components/profile-add/profile-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreManagerProfileService } from './services/storemanager-profile/store-manager-profile.service';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [
    ProfileComponent,
    ClientProfileComponent,
    ProfileEditComponent,
    StoreManagerProfileComponent,
    ProfileAddComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    IconsModule
  ],
  providers: [
    ClientProfileService,
    StoreService,
    ProfileService, 
    StoreManagerProfileService
  ]
})
export class ProfileModule { }
