import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-array',
  templateUrl: './random-array.component.html',
  styleUrls: ['./random-array.component.scss'],
})
export class RandomArrayComponent implements OnInit {

  randomArray = ['5', '8', '4', '3', '5', '6'];

  constructor() { }

  ngOnInit() {
    this.generateRandomArray()
  }

  generateRandomArray = () => this.randomArray.sort(() => 0.5 - Math.random());

}
