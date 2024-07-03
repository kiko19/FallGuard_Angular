import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean | undefined;
  constructor(private _AuthService:AuthService) {
    this._AuthService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
    });
   }

  ngOnInit(): void {
  }

}
