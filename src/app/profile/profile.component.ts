import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppRole } from '../model/app-role';
import { LocalStorageService } from '../services/localstorage/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  personName: string;

  email: string;
  modeToChange: string;

  myObservable = new Observable<string>( subscriber => {

    subscriber.next('felipe');
    subscriber.next('figueroa');
    setTimeout(() => {
      subscriber.next('vergara');

    },2000);
    // subscriber.complete();

  });



  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const profile = this.localStorageService.getCurrentProfile();
    this.personName = `${profile.firstName} ${profile.lastName}`;
    this.email = profile.email;
    switch (profile.role) {
      case AppRole.CLIENT:
        this.modeToChange = 'emprendedor'
        break;
        
      case AppRole.STORE_MANAGER:
        this.modeToChange = 'cliente'
        break;
      
      default:
        break
    }
    this.myObservable.pipe(
      map((result: string)=> {
        return result.toUpperCase();
      })
    ).subscribe(
      (data) => {console.log(data)},
      () => {},
      () => {console.log('Observable complete task')}
    );
    console.log('asdhgasd');
  }

}
