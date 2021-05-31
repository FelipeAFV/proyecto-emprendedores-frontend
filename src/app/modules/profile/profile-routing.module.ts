import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRole } from '../../model/app-role';
import { AuthGuardService } from '../../services/guards/auth/auth-guard.service';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { ProfileAddComponent } from './components/profile-add/profile-add.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { StoreManagerProfileComponent } from './components/store-manager-profile/store-manager-profile.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: 'storeManager',
        component: StoreManagerProfileComponent
      },
      {
        path: 'client',
        component: ClientProfileComponent
      }
]},
  { path: 'edit', component: ProfileEditComponent },
  { path: 'addStoreManager', component: ProfileAddComponent, data: {isStoreManagerRequest: true, profileToCreate: 'emprendedor'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
