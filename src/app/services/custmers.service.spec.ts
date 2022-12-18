import { TestBed } from '@angular/core/testing';

import { CustmersService } from './custmers.service';

describe('CustmersService', () => {
  let service: CustmersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustmersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
