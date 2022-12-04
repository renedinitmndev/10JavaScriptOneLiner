import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent implements OnInit {

  isDark: boolean = false;
  constructor() { }

  ngOnInit() {
    this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log("ISDARK: ", this.isDark);
  }

}
