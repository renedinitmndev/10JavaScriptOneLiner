import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.scss'],
})
export class WeekdayComponent implements OnInit {
  weekday = new Date();
  wd: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log("WEEKDAY SA SO: ",this.isWeekDay(this.weekday))
  }

  isWeekDay(wd:any) {
    wd = this.weekday.getDay() % 6 === 0;//DESCRIPTION: WOCHENENDEN RECHNEN
    this.wd = wd
    return wd;
  }
}
