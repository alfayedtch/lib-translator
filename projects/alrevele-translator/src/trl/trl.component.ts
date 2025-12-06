import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AlreveleTranslatorService } from '../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-trl',
  standalone: true,
  imports: [CommonModule],
  template: ` {{ translation }} `,
  styles: ``
})
export class TrlComponent implements OnInit {
  @Input() key: string | undefined;
  language: string | undefined;
  environment: 'local' | 'production' = 'production';
  translation: string | null | undefined;

  constructor(
    private alreveleService: AlreveleTranslatorService
  ) { }


  ngOnInit(): void {
    this.alreveleService.currentLanguage.subscribe((language) => {
      this.language = language;
      this.getATranslation(this.key);
    });

    this.alreveleService.currentEnvironment.subscribe((env) => {
      this.environment = env;
      this.getATranslation(this.key);
    });
  }

  getATranslation(currentKey: string | undefined) {
    let translations = JSON.parse(
      sessionStorage.getItem('alrevele-traduction')!
    );
    const found = translations.find(
      (key: { key: string | undefined }) => key.key === currentKey
    );

    if (found?.translation) {
      this.translation = found.translation;
    } else {
      // Si la traduction n'existe pas ou est vide
      this.translation = this.environment === 'local' ? currentKey : '';
    }
  }

  getit() {
    let translations = JSON.parse(
      sessionStorage.getItem('alrevele-traduction')!
    );
    const found = translations.find(
      (key: { key: string | undefined }) => key.key === this.key
    );

    if (found?.translation) {
      this.translation = found.translation;
    } else {
      this.translation = this.environment === 'local' ? this.key : '';
    }
  }
}
