import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  widthButton1 = '110px';
  widthButton2 = 130;
  stylesObj = {
    width: '160px',
    backgroundColor: 'green'
  }

  updateStyleObj() {
    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'grey';
  }

  updateStyleObjCorrect() {
    this.stylesObj = {
      width: '170px',
      backgroundColor: 'grey'
    }
  }

  updateWidth() {
    this.widthButton2 = 200;
  }
}
