import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { PlayerService } from '../player.service';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restart-button',
  templateUrl: './restart-button.component.html',
  styleUrls: ['./restart-button.component.css']
})
export class RestartButtonComponent implements OnInit {
  faUndo = faUndo;
  constructor(
    private router: Router,
    private gameState: GameStateService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {}
  restartGame(): void {
    this.gameState.reset();
    this.playerService.resetScores();
    const route = this.gameState.isInCoryatMode() ? '/coryat' : '/game';
    this.router.navigate([route]);
  }
}
