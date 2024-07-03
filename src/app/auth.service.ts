import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();
  constructor(private _httpClient: HttpClient, private _router:Router) {
    if (localStorage.getItem("token") != null) {
      this.loggedIn.next(true);
      this._router.navigate(['/home']);

    }

  }

  register(registerData: any): Observable<any> {
    return this._httpClient.post("https://fallyguardapi.me/api/v1/patients/register", registerData)
  }
  check(checkData: any): Observable<any> {
    return this._httpClient.post("https://fallyguardapi.me/api/v1/patients/verify-email", checkData)
  }
  login(loginData: any): Observable<any> {
    return this._httpClient.post("https://fallyguardapi.me/api/v1/patients/login", loginData);
  }
  contacts(contactData: any): Observable<any> {
    const token: string = localStorage.getItem("token")!;
    return this._httpClient.post("https://fallyguardapi.me/api/v1/emergency-contacts", contactData, {
      headers: {
        Authorization: "Bearer " + token
      }
    }
    )
  }

}
