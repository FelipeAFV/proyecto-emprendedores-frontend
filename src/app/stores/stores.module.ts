import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { StoresRoutingModule } from './stores-routing.module'; 
import { StoreService } from './services/store/store.service';



@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule
  ],
  providers: [
    StoreService
  ]
}) 
export class StoresModule { }
