import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanRenderService {

  private canRender: BehaviorSubject<boolean> = new BehaviorSubject(true);

  allowRender() {
    this.canRender.next(true);
  }
  
  isReadyToRender() {
    return this.canRender;
  }

  constructor() { }
}
