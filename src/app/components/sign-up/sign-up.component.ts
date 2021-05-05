import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormValidationService } from 'src/app/services/validation/form-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor( private authService: AuthService, private formValidationService: FormValidationService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])

    })
  }

  signUp() {
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe(
        (data) => {
          console.log(data);
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

}
