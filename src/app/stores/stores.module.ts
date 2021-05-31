import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { StoresRoutingModule } from './stores-routing.module'; 
import { StoreService } from './services/store/store.service';
import { CheckRoleDirective } from '../directives/check-role/check-role.directive';
import { DirectivesModule } from '../modules/directives/directives.module';



@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    DirectivesModule
  ],
  providers: [
    StoreService
  ]
}) 
export class StoresModule { }
