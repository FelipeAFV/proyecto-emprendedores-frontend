import { TestBed } from '@angular/core/testing';

import { StoreManagerProfileService } from './store-manager-profile.service';

describe('StoreManagerProfileService', () => {
  let service: StoreManagerProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreManagerProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
