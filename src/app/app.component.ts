import { Component } from '@angular/core';
import { GameStateService } from './game-state.service';
import { PlayerService } from './player.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-jeopardy';
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
