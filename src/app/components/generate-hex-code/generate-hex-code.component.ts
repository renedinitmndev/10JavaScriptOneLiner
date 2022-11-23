import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-hex-code',
  templateUrl: './generate-hex-code.component.html',
  styleUrls: ['./generate-hex-code.component.scss'],
})
export class GenerateHexCodeComponent implements OnInit {

  generateHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`

  constructor() { }

  ngOnInit() {
    console.log(this.generateHex())

  }

}
