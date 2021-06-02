import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreCategory, getAllStoreCategories,getAppCategorySpec} from '../../enums/store-category';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {

  addStoreForm: FormGroup;

  defaultCategory: StoreCategory = StoreCategory.GENERAL;
  storeCategories: StoreCategory[] = getAllStoreCategories(); 
  // storeCategories: AppCategory[] = getAllStoreCategories().filter( category => category !== this.defaultCategory); 

  constructor(private storeService: StoreService, private router: Router) { 
    this.addStoreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  getPresentableNameFromCategory(category: StoreCategory) {
    return getAppCategorySpec(category).presentableName;
  }

  ngOnInit(): void {
  }

  createStore() {
    this.storeService.createStore(this.addStoreForm.value).subscribe(
      (data) => {
        this.router.navigate(['profile/storeManager']);
      },
      (err) => {
        alert(err);
      }
    );
  }


}
