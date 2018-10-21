import { TestBed } from '@angular/core/testing';

import { OnesysCoreService } from './onesys-core.service';

describe('OnesysCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnesysCoreService = TestBed.get(OnesysCoreService);
    expect(service).toBeTruthy();
  });
});
