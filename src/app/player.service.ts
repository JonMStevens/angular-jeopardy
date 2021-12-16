import { Injectable } from '@angular/core';
import { GameStateService } from './game-state.service';
import { Player } from './player';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private firstPlayer: Player = { number: 0, name: 'Player 1', score: 0 };
  public _players: Player[] = [Object.assign({}, this.firstPlayer)];
  public get players(): Player[] {
    return this._players;
  }

  public addPlayer(): void {
    const playerNumber = this._players.length;
    this._players.push({
      number: playerNumber,
      name: 'Player ' + (playerNumber + 1).toString(),
      score: 0
    });
    this.savePlayersToSession();
  }

  public removePlayer(): void {
    if (this._players.length < 2) {
      return;
    }
    this._players.pop();
    this.savePlayersToSession();
  }

  public reset(): void {
    this._players = [Object.assign({}, this.firstPlayer)];
    this.savePlayersToSession();
  }

  public resetScores(): void {
    this._players.forEach((player) => (player.score = 0));
    this.savePlayersToSession();
  }
  public savePlayersToSession(): void {
    sessionStorage.setItem('gs_players', JSON.stringify(this._players));
  }
  private getPlayersFromSession(): boolean {
    const key = 'gs_players';
    try {
      const sessionVar: Player[] = JSON.parse(
        String(sessionStorage.getItem(key))
      );
      if (!sessionVar) return false;
      this._players = sessionVar;
    } catch (error) {
      return false;
    }
    return true;
  }
  constructor(gameStateService: GameStateService) {
    if (!this.getPlayersFromSession()) gameStateService.reset();
  }
}
