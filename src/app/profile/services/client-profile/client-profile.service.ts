import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, scheduled } from 'rxjs';
import { Store } from 'src/app/model/store';

@Injectable()
export class ClientProfileService {

  constructor(private http: HttpClient) { }

  getFavoriteStores(): Observable<Store[]> {
    return of([{name: 'El emprendimiento1'},{name: 'El emprendimiento2'}]);
  }
}
