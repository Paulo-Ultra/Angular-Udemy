import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

    buttonTitle = 'Título do botão';
    buttonDisable = true;

    onButtonClick() {
      this.buttonTitle = 'Título Alterado';
      this.buttonDisable = !this.buttonDisable;
    }
}
