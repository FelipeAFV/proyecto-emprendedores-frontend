import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/model/store';
import { ClientProfileService } from '../../services/client-profile/client-profile.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  favoriteStores: Store[];

  constructor(private router: Router, private clientProfileService: ClientProfileService) { }

  ngOnInit(): void {
    this.clientProfileService.getFavoriteStores().subscribe(
      (data: Store[]) => {
        console.log(data);
        this.favoriteStores = data;
      }
    );
  }

  goToStore(store: Store) {
    console.log(store);
    this.router.navigate([`stores/${store.name}`], {state: store});
  }

}
