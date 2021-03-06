import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Clue } from './clue';

enum Mode {
  UNSET = 0,
  CORYAT_MODE = 1,
  GAME_MODE = 2
}
@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  /* mode */
  private _mode: Mode = 0;
  private _allowPeeking = true;

  public set allowPeeking(value: boolean) {
    this._allowPeeking = value;
  }

  public get allowPeeking(): boolean {
    return this._allowPeeking;
  }

  public get mode(): Mode {
    return this._mode;
  }

  public set mode(value: Mode) {
    this._mode = value;
    this.saveModeToStorage();
  }

  private saveModeToStorage(): void {
    sessionStorage.setItem('gs_mode', this.mode.toString());
  }

  public isInCoryatMode(): boolean {
    return this.mode === Mode.CORYAT_MODE;
  }

  public isInGameMode(): boolean {
    return this.mode === Mode.GAME_MODE;
  }

  public setToCoryatMode(): void {
    this.mode = Mode.CORYAT_MODE;
  }

  public setToGameMode(): void {
    this.mode = Mode.GAME_MODE;
  }

  /* round */
  private _round = 1;
  public get round(): number {
    return this._round;
  }

  public set round(value: number) {
    this._round = value;
    sessionStorage.setItem('gs_round', value.toString());
  }

  /* currentClue */
  private _currentClue$ = new BehaviorSubject<Clue | null>(null);

  public get currentClue$(): Observable<Clue | null> {
    return this._currentClue$.asObservable();
  }

  public setCurrentClue(value: Clue | null): void {
    this._currentClue$.next(value);
    sessionStorage.setItem('gs_currentClue', JSON.stringify(value));
  }

  /* roundChange */
  private _roundChange$ = new Subject<number>();
  public get roundChange$(): Observable<number> {
    return this._roundChange$.asObservable();
  }

  public advanceRound(): void {
    this.round++;
    this._roundChange$.next(this.round);
  }

  public reset(): void {
    sessionStorage.clear();
    this.saveModeToStorage();
    this.round = 1;
    this.setCurrentClue(null);
    this._roundChange$.next(this.round);
  }

  public getClueValue(clue: Clue | null): number {
    if (!clue) {
      return 0;
    }
    return 200 * clue.question_number * this.round;
  }

  /* session restores */
  /**
   *
   * @returns true if mode was set successfully from session storage
   */
  private restoreModeFromSession(): boolean {
    const key = 'gs_mode';
    if (!sessionStorage.getItem(key)) {
      return false;
    }

    const sessionVar = Number.parseInt(String(sessionStorage.getItem(key)));

    if (isNaN(sessionVar) || sessionVar < 0 || sessionVar > 2) {
      return false;
    }

    this.mode = sessionVar;
    return true;
  }

  /**
   *
   * @returns true if round was set successfully from session storage
   */
  private restoreRoundFromSession(): boolean {
    const key = 'gs_round';
    if (!sessionStorage.getItem(key)) {
      return false;
    }

    const sessionVar = Number.parseInt(String(sessionStorage.getItem(key)));

    if (isNaN(sessionVar) || sessionVar < 0) {
      return false;
    }

    this.round = sessionVar;
    return true;
  }
  /**
   *
   * @returns true if currentClue was set successfully from session storage
   */
  private restoreCurrentClueFromSession(): boolean {
    const key = 'gs_currentClue';
    try {
      const sessionVar = JSON.parse(String(sessionStorage.getItem(key)));
      this.setCurrentClue(sessionVar);
    } catch (error) {
      return false;
    }
    return true;
  }

  private restoreSessionValues(): void {
    /* either set all to session var or set all to default */
    let success = this.restoreModeFromSession();
    if (success) success = this.restoreRoundFromSession();
    if (success) success = this.restoreCurrentClueFromSession();
    if (!success) {
      this.reset();
    }
  }

  constructor() {
    this.restoreSessionValues();
  }
}
