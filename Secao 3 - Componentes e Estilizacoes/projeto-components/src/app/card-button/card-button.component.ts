import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button',
  //templateUrl: './card-button.component.html',
   //Gera o component com template e não templateUrl
  //ng g c inline --inline-template
  template: `
    <div class="card-button">Teste</div>
  `,
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {

}
