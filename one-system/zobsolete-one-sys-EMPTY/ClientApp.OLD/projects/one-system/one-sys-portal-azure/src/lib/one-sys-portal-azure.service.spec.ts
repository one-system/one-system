import { TestBed } from '@angular/core/testing';

import { OneSysPortalAzureService } from './one-sys-portal-azure.service';

describe('OneSysPortalAzureService', () => {
  let service: OneSysPortalAzureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneSysPortalAzureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
