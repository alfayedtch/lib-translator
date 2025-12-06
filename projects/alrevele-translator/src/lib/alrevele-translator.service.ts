import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlreveleTranslatorService {
  endpoint = 'https://api.translate.2hfan.org/api/translations/';

  private languageSource = new BehaviorSubject('');
  currentLanguage = this.languageSource.asObservable();

  private environmentSource = new BehaviorSubject<'local' | 'production'>('production');
  currentEnvironment = this.environmentSource.asObservable();

  changeLanguage(language: string) {
    this.languageSource.next(language);
  }

  setEnvironment(env: 'local' | 'production') {
    this.environmentSource.next(env);
  }
}
