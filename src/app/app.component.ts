import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'SelectedText', url: '/folder/SelectedText', icon: 'mail' },
    { title: 'ScrollToTop', url: '/folder/ScrollToTop', icon: 'paper-plane' },
    { title: 'GenerateHexCode', url: '/folder/GenerateHexCode', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Das', 'ist', 'javascript', 'Work', 'Team', 'Bereit'];
  constructor() {}
}
