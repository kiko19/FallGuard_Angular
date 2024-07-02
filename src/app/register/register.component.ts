import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = "";
  errors:string[]=[];
  registerform: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/), Validators.minLength(8)]),
    date_of_birth: new FormControl(null),
    phone: new FormControl(null, [Validators.required,Validators.pattern(/01[0-2]{1}[0-9]{8}/)]),
    country: new FormControl(null),
    address: new FormControl(null),
    gender: new FormControl(null)
  })
  constructor(private _authService: AuthService, private cd: ChangeDetectorRef, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(form: FormGroup) {
    console.log("hello", form);
    if (form.valid) {
      this._authService.register(form.value).subscribe(
        (result) => {
          console.log(result);
          this.errors=result.errors
          if (result.message == "patient registered successfully. Please verify your email.") {
            this._router.navigate(["/otp"]);
          } else {

            this.cd.detectChanges();
          }

        }
        ,
        (errorat)=>{
          this.errorMessage = errorat.error.message;
          this.errors=errorat.error.errors;
          console.log(errorat);
        },
        ()=>{
          console.log("Successed");
        }
      )
    }

  }

}
