import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  //Faz com que a classe não esteja encapsulada e as configs de css ficam como globais
  //Isso não é usado normalmente
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  // @ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100
    },
  };
}
