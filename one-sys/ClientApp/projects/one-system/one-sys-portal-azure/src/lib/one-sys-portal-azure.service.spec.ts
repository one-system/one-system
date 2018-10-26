import { TestBed } from '@angular/core/testing';

import { OneSysPortalAzureService } from './one-sys-portal-azure.service';

describe('OneSysPortalAzureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneSysPortalAzureService = TestBed.get(OneSysPortalAzureService);
    expect(service).toBeTruthy();
  });
});
