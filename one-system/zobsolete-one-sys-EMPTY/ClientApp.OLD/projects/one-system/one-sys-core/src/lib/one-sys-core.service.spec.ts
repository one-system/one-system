import { TestBed } from '@angular/core/testing';

import { OneSysCoreService } from './one-sys-core.service';

describe('OneSysCoreService', () => {
  let service: OneSysCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneSysCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
