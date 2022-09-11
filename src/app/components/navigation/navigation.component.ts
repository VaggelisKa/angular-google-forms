import { Component, OnInit } from '@angular/core';

type UrlLink = { name: string; path: string };

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  readonly links: UrlLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Feedback', path: '/feedback' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
