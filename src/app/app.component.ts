import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AlreveleTranslatorModule } from '../../projects/alrevele-translator-18/src/public-api';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AlreveleTranslatorModule, FormsModule, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'www';
  list =['fr','en'];
  language = 'fr';
  //software_key = 'KZ10gYkcsVMhSzNHO';
  software_key = 'g0B134JvYpK2woVrt';
  constructor(
     ){
  }
}
