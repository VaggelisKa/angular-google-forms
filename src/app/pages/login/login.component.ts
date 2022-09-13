import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  handleLogin() {
    this._authService.loginWithRedirect();
  }
}
