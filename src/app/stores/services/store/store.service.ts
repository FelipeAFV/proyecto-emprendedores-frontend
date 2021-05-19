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
}
