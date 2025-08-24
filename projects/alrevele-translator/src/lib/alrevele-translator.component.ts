import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AlreveleTranslatorService, TrlComponent } from '../public-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'lib-alreveleTranslator',
    imports: [HttpClientModule],
    template: `
    <p>  {{ language }}  </p>
  `,
    styles: ``
})
export class AlreveleTranslatorComponent implements OnChanges {
  @Input() language! : string;
  @Input() software_key! : string;
  endpoint = 'https://api.translate.2hfan.org/api/translations';


  constructor(
    private _httpClient: HttpClient,
    private alreveleService: AlreveleTranslatorService,
  ){
    this.alreveleService.currentLanguage.subscribe(language => this.language = language)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['language'].currentValue!== changes['language'].previousValue){
      this.initTranslations();
    }
  }


  initTranslations(){
    this.getTranslations(this.software_key,this.language).subscribe(
      translations => {
        sessionStorage.setItem('alrevele-traduction',JSON.stringify(translations));
        this.alreveleService.changeLanguage(this.language);
      }
    )
  }

  getTranslations(software_key: string, language_code: string|undefined) {
    return this._httpClient.get(
      this.endpoint + '/' + software_key + '/' + language_code);
  }
}
