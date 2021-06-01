import { TestBed } from '@angular/core/testing';

import { CanRenderService } from './can-render.service';

describe('CanRenderService', () => {
  let service: CanRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
