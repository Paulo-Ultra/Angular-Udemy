import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusClassPipe } from '../../pipes/status-class.pipe';



@NgModule({
  declarations: [StatusClassPipe],
  imports: [
    CommonModule
  ],
  exports: [StatusClassPipe]
})
export class SharedModule { }
