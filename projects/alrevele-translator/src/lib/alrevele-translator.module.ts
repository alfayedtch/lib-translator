import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlreveleTranslatorComponent } from './alrevele-translator.component';
import { TrlComponent } from '../trl/trl.component';
import { TrlPipe } from '../trl/trl.pipe';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlreveleTranslatorComponent,
    TrlComponent,
    TrlPipe
  ],
  exports: [AlreveleTranslatorComponent, TrlComponent, TrlPipe]
})
export class AlreveleTranslatorModule { }
