import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-touch-support',
  templateUrl: './touch-support.component.html',
  styleUrls: ['./touch-support.component.scss'],
})
export class TouchSupportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.canTouchIt());
  }

  canTouchIt() {
    return 'ontouchstart' in window;
  }
}
