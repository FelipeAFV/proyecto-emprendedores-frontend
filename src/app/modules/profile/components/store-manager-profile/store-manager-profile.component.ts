import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/model/store';
import { StoreManagerProfileService } from '../../services/storemanager-profile/store-manager-profile.service';

@Component({
  selector: 'app-store-manager-profile',
  templateUrl: './store-manager-profile.component.html',
  styleUrls: ['./store-manager-profile.component.css']
})
export class StoreManagerProfileComponent implements OnInit {

  managerStores: Store[];

  constructor(private storeManagerService: StoreManagerProfileService, private router: Router) { }

  ngOnInit(): void {
    this.storeManagerService.getStores().subscribe(
      (stores: Store[]) => {
        this.managerStores = stores;
      }
    );
  }

  goToStore(store: Store) {
    this.router.navigate([`stores/${store.name}`])
  }

}
