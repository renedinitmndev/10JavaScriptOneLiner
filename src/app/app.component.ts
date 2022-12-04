import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'SelectedText', url: '/folder/SelectedText', icon: 'heart' },
    { title: 'ScrollToTop', url: '/folder/ScrollToTop', icon: 'heart' },
    { title: 'GenerateHexCode', url: '/folder/GenerateHexCode', icon: 'heart' },
    { title: 'Clipboard', url: '/folder/Clipboard', icon: 'heart' },
    { title: 'RandomArray', url: '/folder/RandomArray', icon: 'heart' },
    { title: 'Darkmode', url: '/folder/Darkmode', icon: 'heart' },
    { title: 'Weekday', url: '/folder/Weekday', icon: 'heart' },
    { title: 'BrowserTabAktiv', url: '/folder/BrowserTabAktiv', icon: 'heart' },
    { title: 'CanTouchIt', url: '/folder/CanTouchIt', icon: 'heart' },
    { title: 'NavUnderlineEffect', url: '/folder/NavUnderlineEffect', icon: 'heart' },
  ];
  public labels = ['Das', 'ist', 'javascript', 'Work', 'Team', 'Bereit'];
  constructor() { }
}
