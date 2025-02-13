import { Component, Input, numberAttribute } from '@angular/core';

//Se a logica for grande ou complexa é ideal usar function para o transform
function handlePlanType (value: string){
  console.log('handlePlanType', value);
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  //Required é do angular 16+ //Aula 58 Transform tem functions nativas como a numberAttribute
  //@Input({ required: true, alias: 'planPriceAlias', transform: numberAttribute }) planPrice: number = 0;
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  @Input( { alias: 'planType', transform: (value: string) => handlePlanType(value) }) planType: string = '';

  buttonClicked(valueEmmited: boolean){
    console.log('ButtonClicked', valueEmmited);
    console.log('planType', this.planType);
  }
}
