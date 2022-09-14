import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {}

  async ngOnInit() {
    const form = await fetch(
      'https://forms.googleapis.com/v1/forms/1BEtVQkqQAHt-jIn-GVyMMco3Q5vI3Epzy-SSPXzkOxs'
    );

    console.log(form);
  }
}
