import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isNotValid(controlName: string, formGroup: FormGroup): boolean {
    return (formGroup.get(controlName).touched && formGroup.get(controlName).invalid);
  }
}
