import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText: string = 'Texto Inicial';
  inputType = "text";
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
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

  handleInputKeyup(event: KeyboardEvent) {
    //valor pego da interface que é tipagem correta e fazendo um casting dessa propriedade
    //Os valores das propriedades ficam na propriedade target
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
    //https://v17.angular.io/guide/event-binding-concepts
  }
}
