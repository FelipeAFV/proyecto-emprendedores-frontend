import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { LocalStorageService } from './../../services/localstorage/local-storage.service';
import { FormValidationService } from './../../services/validation/form-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor( private authService: AuthService, private formValidationService: FormValidationService, private router: Router,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null),
      email: new FormControl(null, [Validators.email, Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])

    })

    this.signUpForm.addControl('passwordConfirm', new FormControl('', [this.formValidationService.equalControlValueValidator(this.signUpForm.get('password'))]));

    this.signUpForm.get('password').statusChanges.subscribe(
      (data) => {

        this.signUpForm.get('passwordConfirm').updateValueAndValidity({onlySelf: true});
      }
    );
  }

  signUp() {
    this.signUpForm.markAllAsTouched();
    this.signUpForm.get('passwordConfirm').markAsTouched();
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe(
        (data:any) => {
          console.log(data);
          this.localStorageService.setProfile(data.profile);
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('Form not valid');
    }
  }

  isNotValid(controlName) {
    return this.formValidationService.isNotValid(controlName, this.signUpForm);
  }

  isNotValidUntouched(controlName) {
    return this.formValidationService.isNotValidUntouched(controlName, this.signUpForm);
  }

}
