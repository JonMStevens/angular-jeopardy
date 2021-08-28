import { TestBed } from '@angular/core/testing';

import { GameModeGuard } from './game-mode.guard';

describe('GameModeGuard', () => {
  let guard: GameModeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameModeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
