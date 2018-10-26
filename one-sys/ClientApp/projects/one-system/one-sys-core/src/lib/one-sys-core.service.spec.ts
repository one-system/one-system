import { TestBed } from '@angular/core/testing';

import { OneSysCoreService } from './one-sys-core.service';

describe('OneSysCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneSysCoreService = TestBed.get(OneSysCoreService);
    expect(service).toBeTruthy();
  });
});
