import { TestBed } from '@angular/core/testing';

import { OnesysPortalAzureService } from './onesys-portal-azure.service';

describe('OnesysPortalAzureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnesysPortalAzureService = TestBed.get(OnesysPortalAzureService);
    expect(service).toBeTruthy();
  });
});
