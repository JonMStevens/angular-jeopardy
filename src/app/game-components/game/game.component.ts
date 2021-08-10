import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../game-state.service';
import { PlayerService } from '../../player.service';
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  faUserPlus = faUserPlus;
  faUserMinus = faUserMinus;
  ngOnInit(): void {}
  constructor(
    private gameState: GameStateService,
    public playerService: PlayerService
  ) {}
  showBoard = (): boolean => this.gameState.currentClue == null;
  showDoubleJeopardyButton = (): boolean => this.gameState.round == 1;
  startDoubleJeopardy(): void {
    this.gameState.round++;
    this.gameState.roundChange$.next(this.gameState.round);
  }
}
