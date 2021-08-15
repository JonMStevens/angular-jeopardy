import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { GameStateService } from '../game-state.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-board-footer',
  templateUrl: './board-footer.component.html',
  styleUrls: ['./board-footer.component.css']
})
export class BoardFooterComponent implements OnInit {
  faUserPlus = faUserPlus;
  faUserMinus = faUserMinus;
  showingDoubleJeopardyAlert = false;
  @Input() isHorizontal: boolean | undefined = undefined;
  @HostBinding('class.vertical') applyVerticalClass = false;

  constructor(
    private gameState: GameStateService,
    public playerService: PlayerService
  ) {}
  ngOnInit(): void {
    this.applyVerticalClass = this.isHorizontal === false;
  }
  showDoubleJeopardyButton = (): boolean => this.gameState.round == 1;
  startDoubleJeopardy(): void {
    this.hideDoubleJeopardyAlert();
    this.gameState.round++;
    this.gameState.roundChange$.next(this.gameState.round);
  }
  showDoubleJeopardyAlert(): void {
    this.showingDoubleJeopardyAlert = true;
  }
  hideDoubleJeopardyAlert(): void {
    this.showingDoubleJeopardyAlert = false;
  }

  arrangePlayersVertically(): boolean {
    if (!this.isHorizontal) return true;
    return this.playerService.players.length >= 4;
  }
}
