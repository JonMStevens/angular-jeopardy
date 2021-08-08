import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { PlayerService } from '../player.service';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restart-button',
  templateUrl: './restart-button.component.html',
  styleUrls: ['./restart-button.component.css']
})
export class RestartButtonComponent implements OnInit {
  faUndo = faUndo;
  constructor(
    private gameState: GameStateService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {}
  restartGame(): void {
    this.gameState.reset();
    this.playerService.resetScores();
  }
}
