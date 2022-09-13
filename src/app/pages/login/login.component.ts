import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this._router.navigate(['/']);
      }
    });
  }

  handleLogin() {
    this._authService.loginWithRedirect();
  }
}
