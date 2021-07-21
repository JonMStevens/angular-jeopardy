import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  private _roundChange$ = new Subject<number>();
  public get roundChange$(): Subject<number> {
    return this._roundChange$;
  }

  public reset(): void {
    this.round = 1;
    this.currentClue = null;
    this.roundChange$.next(this.round);
  }

  public getClueValue(clue: Clue | null): number {
    if (!clue) {
      return 0;
    }
    return 200 * clue.question_number * this.round;
  }
  constructor() {}
}
