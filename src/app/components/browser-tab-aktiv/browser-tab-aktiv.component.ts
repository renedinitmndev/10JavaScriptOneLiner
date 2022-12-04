import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-tab-aktiv',
  templateUrl: './browser-tab-aktiv.component.html',
  styleUrls: ['./browser-tab-aktiv.component.scss'],
})
export class BrowserTabAktivComponent implements OnInit {

  browserTabIsActive: boolean = false;
  constructor() { }

  ngOnInit() {
    this.broTabIsAc();
  }

  //TODO: return: boolean 
  broTabIsAc() {
    const atia = !document.hidden;
    console.log('atia', atia, !document.hidden);
    if (atia) {
      console.log('JA++++', atia);
    }
    {
      console.log('NEIN#####', this.browserTabIsActive);
    }
  }


}
