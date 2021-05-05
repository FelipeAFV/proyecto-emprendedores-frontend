import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormValidationService } from 'src/app/services/validation/form-validation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private authService: AuthService ,private formValidationService: FormValidationService, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  signIn() {
    this.signInForm.markAllAsTouched();
    if (this.signInForm.invalid) return;
    this.authService.signIn(this.signInForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  isNotValid(controlName: string) {
    return this.formValidationService.isNotValid(controlName, this.signInForm);
  }

}
