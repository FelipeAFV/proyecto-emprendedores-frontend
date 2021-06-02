import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from 'src/app/model/store';
import { environment } from 'src/environments/environment';

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

  getStoreByName(storeName: string): Observable<Store> {
    return this.http.get<Store>(`${environment.ApiUrl}/stores/${storeName}`, {withCredentials: true});
    // return of({name: storeName});
  }
  
  isStoreManager(storeName: string) {
    return this.http.post(`${environment.ApiUrl}/authorization/isStoreOwner`, {storeName: storeName}, {withCredentials: true});
    
  }
  
  createStore(store: Store) {
    return this.http.post(`${environment.ApiUrl}/stores`, store, {withCredentials: true});

  }
}
