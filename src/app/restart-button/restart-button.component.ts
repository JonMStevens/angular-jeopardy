import { Component } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { PlayerService } from '../player.service';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restart-button',
  templateUrl: './restart-button.component.html',
  styleUrls: ['./restart-button.component.css']
})
export class RestartButtonComponent {
  public faUndo = faUndo;
  public showingRestartJeopardyAlert = false;
  constructor(
    private router: Router,
    private gameState: GameStateService,
    private playerService: PlayerService
  ) {}

  public restartGame(): void {
    this.gameState.reset();
    this.playerService.resetScores();
    this.hideRestartJeopardyAlert();
    const route = this.gameState.isInCoryatMode() ? '/coryat' : '/game';
    this.router.navigate([route]);
  }
  public showRestartModal(): void {
    this.showingRestartJeopardyAlert = true;
  }
  public hideRestartJeopardyAlert(): void {
    this.showingRestartJeopardyAlert = false;
  }
  public getRestartDescription(): string {
    return this.gameState.isInCoryatMode()
      ? 'restart? Clicking yes will erase your scores and begin a new game.'
      : 'restart? Clicking yes will erase your scores and begin a new game with new questions.';
  }
}
