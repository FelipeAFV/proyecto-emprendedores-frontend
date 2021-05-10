import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isNotValid(controlName: string, formGroup: FormGroup): boolean {
    return (formGroup.get(controlName).touched && formGroup.get(controlName).invalid);
  }

  isNotValidUntouched(controlName: string, formGroup: FormGroup): boolean {
    return (formGroup.get(controlName).invalid);
  }

  equalControlValueValidator(controlToCompare: AbstractControl): ValidatorFn {
    return ( control: AbstractControl) => {
      let state = control.value == controlToCompare.value;
      // if (control.value === '' && controlToCompare.value === null) state = true;
      return !state ? { error: 'Controls not equal'} : null; 
    }
  }
}
