import { TestBed } from '@angular/core/testing';

import { ApiiService } from './apii.service';

describe('ApiiService', () => {
  let service: ApiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
