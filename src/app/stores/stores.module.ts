import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { StoresRoutingModule } from './stores-routing.module'; 
import { StoreService } from './services/store/store.service';
import { CheckRoleDirective } from '../directives/check-role/check-role.directive';
import { DirectivesModule } from '../modules/directives/directives.module';
import { StoreAddComponent } from './components/store-add/store-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoreComponent,
    StoreAddComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    DirectivesModule,
    ReactiveFormsModule
  ],
  providers: [
    StoreService
  ]
}) 
export class StoresModule { }
