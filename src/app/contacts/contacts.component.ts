import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  errors: string = '';
  errorMessage: string = '';
  contactsform: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    address: new FormControl(null),
    relationship: new FormControl(null)

  })
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  contactsUser(form: FormGroup) {
    this._authService.contacts(form.value).subscribe(
      (result) => {
        console.log(result);
        this.errors = result.errors;
        // this._router.navigate(["/home"]);
        const doneElement = document.getElementById('done');
        if (doneElement) {
          doneElement.classList.remove('d-none');
          doneElement.classList.add('d-block');
        }

        // Optionally, hide the message after a few seconds
        setTimeout(() => {
          if (doneElement) {
            doneElement.classList.remove('d-block');
            doneElement.classList.add('d-none');
          }
        }, 3000)
        this.contactsform.reset();

      }
      ,
      (errorat) => {
        this.errorMessage = errorat.error.message;
        this.errors = errorat.error.errors;
        console.log(errorat);
      },
      () => {
        console.log("Successed");

      }
    )


  }


}
