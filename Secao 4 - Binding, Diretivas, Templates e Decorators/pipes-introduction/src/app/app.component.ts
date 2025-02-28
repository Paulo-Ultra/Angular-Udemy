import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = 'Paulo';
  pessoa = {
    name: 'Paulo',
    status: 1,
  }

  pessoa2 = {
    name: 'Felipe',
    status: 2,
  }

  pessoa3 = {
    name: 'João',
    status: 3,
  }

}
