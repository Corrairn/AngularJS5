import { Component } from '@angular/core';

@Component({
  selector: 'app-netit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    "a { color: red; }"
  ]
})
export class AppComponent {
  title = 'NetIt app';

  subtitle = "Welcome to NetIt angular app!";

  thing = {
    name: "Thing",
    title: "The title!!!"
  };
}
