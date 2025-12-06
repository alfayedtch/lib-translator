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
    template: ` <p>{{ translation }}</p> `,
    styles: ``
})
export class TrlComponent implements OnInit {
  @Input() key: string | undefined;
  language: string | undefined;
  translation: string | null | undefined;

  constructor(
    private alreveleService: AlreveleTranslatorService
  ) {}


  ngOnInit(): void {
    this.alreveleService.currentLanguage.subscribe((language) => {
      this.language = language;
      this.getATranslation(this.key);
    });
  }

  getATranslation(currentKey: string | undefined) {
    let translations = JSON.parse(
      sessionStorage.getItem('alrevele-traduction')!
    );
    this.translation = translations.find(
      (key: { key: string | undefined }) => key.key === currentKey
    )?.translation;
  }

  getit() {
    let translations = JSON.parse(
      sessionStorage.getItem('alrevele-traduction')!
    );
    this.translation = translations.find(
      (key: { key: string | undefined }) => key.key === this.key
    )?.translation;
  }
}
