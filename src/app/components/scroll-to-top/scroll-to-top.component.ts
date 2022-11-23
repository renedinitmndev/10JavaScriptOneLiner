import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnInit {


  //TODO: auch noch ein Fehler??
  button = document.querySelector('#scroll-top');

  scrollToTop = () => window.scrollTo(0, 0);
  constructor() {
    console.log("scrollToTop::", this.scrollToTop);
  }

  ngOnInit() {
  }

  clickButton() {
    this.button?.addEventListener('click', this.scrollToTop);
  }



}
