import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  checkform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email, Validators.required]),
    otp: new FormControl(null, [Validators.required])
  })
  constructor(private _authService: AuthService , private _router:Router) { }

  ngOnInit(): void {
  }
  checkUser(form: FormGroup) {
    this._authService.check(form.value).subscribe(
      (result) => {
        console.log(result);
        if(result.message=="Email verified, you can now login.")
          {
            this._router.navigate(["/login"]);

          }
      }
    )
}

}
