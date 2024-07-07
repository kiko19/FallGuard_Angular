import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string = "";
  errors: string[] = [];
  token: string = "";
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/), Validators.minLength(8)])
  })
  constructor(private _authService: AuthService, private _router: Router) {
  }


  ngOnInit(): void {

  }

  loginUser(form: FormGroup) {
    this._authService.login(form.value).subscribe(
      (result) => {
        console.log(result);
        this.token = result.token;
        localStorage.setItem("token", this.token);
        this._authService.loggedIn.next(true);
        this._router.navigate(["/home"]);


      },
      (errorat) => {
        this.errorMessage = errorat.error.errors.message;
        this.errors = errorat.error.errors;
        console.log(errorat);
      },
      () => {
        console.log("Successed");
      }
    )
  }

}
