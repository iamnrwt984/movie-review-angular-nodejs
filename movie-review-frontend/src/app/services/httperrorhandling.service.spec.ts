import { TestBed } from '@angular/core/testing';

import { HttperrorhandlingService } from './httperrorhandling.service';

describe('HttperrorhandlingService', () => {
  let service: HttperrorhandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttperrorhandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
