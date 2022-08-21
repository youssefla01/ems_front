import { TestBed } from '@angular/core/testing';

import { GardeuserGuard } from './gardeuser.guard';

describe('GardeuserGuard', () => {
  let guard: GardeuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GardeuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
