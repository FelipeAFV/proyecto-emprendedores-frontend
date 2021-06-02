import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from 'src/app/model/store';
import { StoreCategory } from 'src/app/stores/enums/store-category';
import { environment } from 'src/environments/environment';

@Injectable()
export class StoreManagerProfileService {

  constructor(private http: HttpClient) { }

  getStores(): Observable<Store[]> {
    // return this.http.get(`${environment.ApiUrl}/storeManager/stores`, { withCredentials: true});
    return of([{name: 'Mi tienda 1', category: StoreCategory.CLOTHES, description: 'Mi tienda 1'},
      {name: 'Mi tienda 2',  category: StoreCategory.CLOTHES, description: 'Mi tienda 1'}])
  }
}
