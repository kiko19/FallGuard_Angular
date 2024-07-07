import { Component } from '@angular/core';

import * as AOS from 'aos';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {

    AOS.init();
  }
  constructor(private _authService: AuthService) {
  }


}
