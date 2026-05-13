import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { WindowRef } from '../services/windowref';
import { PortalService } from './portal-service';

describe('PortalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [PortalService, WindowRef, Location]
    });
  });

  it('should be initialized', inject([PortalService], (sut: PortalService) => {
    expect(sut).toBeTruthy();
  }));
});
