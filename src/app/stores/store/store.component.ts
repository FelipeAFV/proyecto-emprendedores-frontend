import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from 'src/app/model/store';
import { StoreService } from '../services/store/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  store: Store;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location, private storeService: StoreService) {
    // this.store = <Store> this.location.getState();
  }



  ngOnInit(): void {
    console.log('Store', this.store);
    
    this.activatedRoute.params.subscribe( (params: Params) => {
      console.log('Param id', params.id);
      this.storeService.getStoreByName(params.storeName).subscribe(
        (data) => {
          this.store = data;
          console.log('Store', this.store);
        }
        );
    })
    console.log('Store', this.store);
    // console.log(this.router.getCurrentNavigation().extras.state);
    
    // console.log(this.store);
    // this.activatedRoute.data.subscribe( (data) => {
    //   console.log(data);
    // });
  }

}
