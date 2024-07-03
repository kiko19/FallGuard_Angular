import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean | undefined;


  constructor(private _router: Router,private _authService:AuthService) {

    this._authService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
    });
  }
  loggedOut() {
    localStorage.clear();
    this._authService.loggedIn.next(false);
    this._router.navigate(['/login']);
  }


  ngOnInit(): void {

  }

}
