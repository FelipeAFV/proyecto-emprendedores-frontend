import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'src/app/model/store';
import { LocalStorageService } from 'src/app/services/localstorage/local-storage.service';
import { CanRenderService } from '../../services/can-render/can-render.service';
import { ClientProfileService } from '../../services/client-profile/client-profile.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit, OnDestroy {

  favoriteStores: Store[];

  subscription: Subscription;

  storesSubscription: Subscription;

  constructor(private router: Router, private clientProfileService: ClientProfileService, private canRenderService: CanRenderService, private localStorageService: LocalStorageService) { 
    console.log('Client profile constructor');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.storesSubscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.subscription = this.canRenderService.isReadyToRender().subscribe(
      (data) => {
        console.log('Suscribiendose a canRenderService');
        this.storesSubscription = this.clientProfileService.getFavoriteStores().subscribe(
          (data: Store[]) => {
            console.log(data);
            this.favoriteStores = data;
          },
          (err) => {
            console.log('Error', err);
          }
        );
        
      }
    );
  }

  goToStore(store: Store) {
    console.log(store);
    this.router.navigate([`stores/${store.name}`], {state: store});
  }

}
