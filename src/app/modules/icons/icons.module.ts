import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlusCircle } from "ng-bootstrap-icons/icons";
import { BootstrapIconsModule } from 'ng-bootstrap-icons';


const icons = {
  PlusCircle
}

@NgModule({
  declarations: [],
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }

