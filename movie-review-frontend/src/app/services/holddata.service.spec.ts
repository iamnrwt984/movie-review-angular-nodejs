import { TestBed } from '@angular/core/testing';

import { HolddataService } from './holddata.service';

describe('HolddataService', () => {
  let service: HolddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
