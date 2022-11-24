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
    { title: '...', url: '/folder/...', icon: 'heart' },
    { title: '...', url: '/folder/...', icon: 'heart' },
    { title: '...', url: '/folder/....', icon: 'heart' },
    { title: '...', url: '/folder/...', icon: 'heart' },
  ];
  public labels = ['Das', 'ist', 'javascript', 'Work', 'Team', 'Bereit'];
  constructor() {}
}
