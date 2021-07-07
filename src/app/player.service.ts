import { Injectable } from '@angular/core';
import { Player } from './player';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public _players: Player[] = [{number: 1, name: "Player 1", score: 0}];
  public get players(): Player[] {
    return this._players;
  }

  public addPlayer(): void {
    const playerNumber = this._players.length + 1;
    this._players.push({
      number: playerNumber,
      name: 'Player ' + playerNumber.toString(),
      score: 0
    });
  }

  public removePlayer() : void {
    if (this._players.length < 2) { return; }
    this._players.pop();
  }
  constructor() {}
}
