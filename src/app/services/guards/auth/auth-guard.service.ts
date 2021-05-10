import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { LocalStorageService } from '../../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private localStorageService: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Observable<boolean>( subscriber => {
      const isLogged = this.localStorageService.getCurrentProfile();
      if (isLogged) return subscriber.next(true);
      return subscriber.next(false);
    }) 
  }
}
