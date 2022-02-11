import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardText = "This is the card text";

  // Function difinition
  calculate(var1, var2) {
    return var1 * var2;
  }

  // Function invocation
  blah =  this.calculate(5, 8);

  constructor() { }

  ngOnInit() {
  }

}
