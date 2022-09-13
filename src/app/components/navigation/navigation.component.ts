import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

type UrlLink = { name: string; path: string };

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  readonly links: UrlLink[] = [
    { name: 'Home', path: '' },
    { name: 'Analytics', path: 'analytics' },
    { name: 'Feedback', path: 'feedback' },
    { name: 'Logout', path: 'logout' },
  ];

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  handleLogout() {
    this._authService.logout({ returnTo: window.location.origin });
  }
}
