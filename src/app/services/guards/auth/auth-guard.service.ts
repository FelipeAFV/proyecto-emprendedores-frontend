import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Observable<boolean>( subscriber => {
      const isLogged = this.authService.isLogged().subscribe(
        (data) => {
          return subscriber.next(true);
        },
        (err) => {
          this.router.navigate(['home']);
          return subscriber.next(false);
          
        }
      );
    }) 
  }
}
