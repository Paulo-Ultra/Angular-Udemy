import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText: string = 'Texto Inicial';
  inputType = "text";
  isDesabled = false;

  enableInput() {
    this.isDesabled = false;
  }

  disableInput() {
    this.isDesabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  setTextTypeInput(){
    this.inputType = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }
}
