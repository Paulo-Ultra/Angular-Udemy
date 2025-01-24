import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  //styleUrl: './card-button-cancel.component.scss'
  styles: [
    `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.card-button-cancel {
  font-size: 16px;
  text-align: center;
  max-width: 350px;
  background-color: #red;
  border-radius: 25px;
  padding: 30px;
  cursor: pointer;
  font-weight : bold;
  font-family: 'Poppins', sans-serif;

  &__item {
    padding: 10px;
  }

  &__plan {
    font-size: 22px;
  }
}

    `,

    `
    .card-button-canel {
      background-color : #black;
    }
    `
  ],
})
export class CardButtonCancelComponent {

}
