import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';


@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
})
export class ClipboardComponent implements OnInit {
  // copyed:string;
  copyed: string = "";

  constructor() { }

  ngOnInit() {
  }
  copy() {
    navigator.clipboard.writeText(this.copyed);
  }
}
