import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isGreen: boolean = true;

  setToGreen() {
    this.isGreen = true;
  }

  setToOrange() {
    this.isGreen = false;
  }
}



 /* fontSize: number = 15;
  textColor: 'black' | 'orange' = 'black'
  buttonText: 'Branco' | 'Laranja' = 'Laranja';
  stylesString: string = 'font-size: 15px; color: black';
  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
  }

  increaseFontSize() {
    this.fontSize += 5;

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }

  toogleFontColor(){
    if(this.textColor === 'black'){
      this.textColor = 'orange';
      this.buttonText = 'Branco';
    } else {
      this.textColor = 'black';
      this.buttonText = 'Laranja';
    }
    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }
}*/
