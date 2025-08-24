import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlreveleTranslatorService {
  endpoint = 'https://api.translate.2hfan.org/api/translations/';

  private languageSource =  new BehaviorSubject('');
  currentLanguage = this.languageSource.asObservable();

  changeLanguage(language: string){
    this.languageSource.next(language);
  }
}
