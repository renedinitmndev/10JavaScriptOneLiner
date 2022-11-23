import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-text',
  templateUrl: './selected-text.component.html',
  styleUrls: ['./selected-text.component.scss'],
})
export class SelectedTextComponent implements OnInit {

  getSelectedText = () => window.getSelection();

  constructor() {
    document.addEventListener('mouseup', () => {
      //TODO Text kann nicht makiert werden XFUNKTIONIERT-20.11.22X
      console.log(this.getSelectedText()?.toString());
      let gst = this.getSelectedText()?.toString();
      if (gst) {
        console.log("HAHAHAHAHAHA+++++++++++++++++");
      } else {
        console.log("NANANANANANANAN-----------------");
      }
    });
  }

  ngOnInit() {

  }
}
