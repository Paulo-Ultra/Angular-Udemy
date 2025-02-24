import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  personSelectedIndex: number | undefined;

  listPeople = [
    {name: 'Paulo Ricardo', age: 39},
    {name: 'Felipe Freitas', age: 26},
    {name: 'Fulano da Silva', age: 55},
    {name: 'Joãozinho Gabriel', age: 18},
  ];

  selectPerson(index: number){
    console.log(index);
    this.personSelectedIndex = index;
  }
}
