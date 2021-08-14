import { TestBed } from '@angular/core/testing';

import { CoryatModeGuard } from './coryat-mode.guard';

describe('CoryatModeGuard', () => {
  let guard: CoryatModeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoryatModeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
