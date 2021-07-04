import { Injectable } from '@angular/core';
import { Clue } from './clue';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private _round = 1;
  public get round(): number {
    return this._round;
  }
  public set round(value: number) {
    this._round = value;
  }

  private _currentClue: Clue | null = null;

  public get currentClue(): Clue | null {
    return this._currentClue;
  }
  public set currentClue(value: Clue | null) {
    this._currentClue = value;
  }
  constructor() {}

}
