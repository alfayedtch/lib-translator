import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreveleTranslatorComponent } from './alrevele-translator.component';

describe('AlreveleTranslatorComponent', () => {
  let component: AlreveleTranslatorComponent;
  let fixture: ComponentFixture<AlreveleTranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlreveleTranslatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlreveleTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
