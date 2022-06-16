import { Component } from '@angular/core';
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { GameStateService } from '../game-state.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-board-footer',
  templateUrl: './board-footer.component.html',
  styleUrls: ['./board-footer.component.css']
})
export class BoardFooterComponent {
  faUserPlus = faUserPlus;
  faUserMinus = faUserMinus;
  showingDoubleJeopardyAlert = false;

  constructor(
    private gameState: GameStateService,
    public playerService: PlayerService
  ) {}
  public showDoubleJeopardyButton = (): boolean => this.gameState.round == 1;

  public startDoubleJeopardy(): void {
    this.hideDoubleJeopardyAlert();
    this.gameState.advanceRound();
  }

  public showDoubleJeopardyAlert(): void {
    this.showingDoubleJeopardyAlert = true;
  }

  hideDoubleJeopardyAlert(): void {
    this.showingDoubleJeopardyAlert = false;
  }

  public arrangePlayersVertically(): boolean {
    return this.playerService.players.length >= 4;
  }
}
