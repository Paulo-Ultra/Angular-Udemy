import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  //Required é do angular 16+
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;

  private _planType: string = '';

  @Input('planType') set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  get planType(): string{
    return this._planType;
  }


  buttonClicked(valueEmmited: boolean){
    console.log('ButtonClicked', valueEmmited);
    console.log('planType', this.planType);
  }
}
