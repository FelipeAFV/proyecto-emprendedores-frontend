import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreComponent } from "./store/store.component";


const routes: Routes = [
    {path: ':storeName', component: StoreComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoresRoutingModule {

}