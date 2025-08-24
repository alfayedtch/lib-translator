import { TestBed } from '@angular/core/testing';

import { AlreveleTranslatorService } from './alrevele-translator.service';

describe('AlreveleTranslatorService', () => {
  let service: AlreveleTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlreveleTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
