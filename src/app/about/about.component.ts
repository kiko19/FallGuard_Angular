import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isLoggedIn: boolean | undefined;
  constructor(private _AuthService:AuthService) {
    this._AuthService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
    });
   }

  ngOnInit(): void {
  }

}
