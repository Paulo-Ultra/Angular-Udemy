import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{

  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100
    }
  };

  ngOnInit(): void {
    console.log("OnInit");
  }
}
