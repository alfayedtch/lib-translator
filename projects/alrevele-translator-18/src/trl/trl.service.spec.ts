import { TestBed } from '@angular/core/testing';

import { TrlService } from './trl.service';

describe('TrlService', () => {
  let service: TrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
