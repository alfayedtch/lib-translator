import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlreveleTranslatorComponent } from './alrevele-translator.component';
import { TrlComponent } from '../trl/trl.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlreveleTranslatorComponent,
    TrlComponent
  ],
  exports: [AlreveleTranslatorComponent,TrlComponent]
})
export class AlreveleTranslatorModule { }
