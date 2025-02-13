import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

  //Forma mais verbosa
  //@ts-ignore
  //@Output('buttonClick') buttonClickEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  //Forma menos verbosa
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  @Input({ transform: booleanAttribute }) buttonDisabled: boolean = false;

  onButtonClick(){
    console.log('onButtonClick');
    this.buttonClickEmitter.emit(true);
  }
}
