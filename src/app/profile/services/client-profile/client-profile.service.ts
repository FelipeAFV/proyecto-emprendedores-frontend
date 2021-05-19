import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, scheduled } from 'rxjs';
import { Store } from 'src/app/model/store';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClientProfileService {

  constructor(private http: HttpClient) { }

  getFavoriteStores(): Observable<Store[]> {
    // return of([{name: 'El emprendimiento1', description: 'Esta es la tienda del emprendimiento 1'},{name: 'El emprendimiento2',  description: 'Esta es la tienda del emprendimiento 1'}]);
    return this.http.get<Store[]>(`${environment.ApiUrl}/client/favoriteStores`, {withCredentials: true});
  }
}
