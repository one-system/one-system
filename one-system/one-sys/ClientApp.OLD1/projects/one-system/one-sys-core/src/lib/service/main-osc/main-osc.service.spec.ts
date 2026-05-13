import { TestBed } from '@angular/core/testing';

import { MainOscService } from './main-osc.service';

describe('MainOscService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: MainOscService = TestBed.get(MainOscService);
        expect(service).toBeTruthy();
    });
});
