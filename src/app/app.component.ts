import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlreveleTranslatorModule } from '../../projects/alrevele-translator/src/public-api';
import { TrlPipe } from '../../projects/alrevele-translator/src/trl/trl.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlreveleTranslatorModule, FormsModule, CommonModule, TrlPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'www';
  list = ['fr', 'en'];
  language = 'fr';
  //software_key = 'KZ10gYkcsVMhSzNHO';
  software_key = 'g0B134JvYpK2woVrt';
  constructor(
  ) {
  }
}
