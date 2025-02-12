import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input('planTypeAlias') planType: string = '';
  //Required é do angular 16+
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;

}
