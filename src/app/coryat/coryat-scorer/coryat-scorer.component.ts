import { Component, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/game-state.service';
import { Player } from 'src/app/player';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-coryat-scorer',
  templateUrl: './coryat-scorer.component.html',
  styleUrls: ['./coryat-scorer.component.css']
})
export class CoryatScorerComponent implements OnInit {
  results: number[] = [];

  constructor(
    private gameState: GameStateService,
    public playerService: PlayerService
  ) {}

  ngOnInit(): void {}
  showBoard(): void {
    this.gameState.currentClue = null;
  }

  onRulingChange(result: number, player: Player): void {
    this.results[player.number] = result;
  }

  awardPoints(): void {
    this.results.forEach(
      (result, i) =>
        (this.playerService.players[i].score +=
          result * this.gameState.getClueValue(this.gameState.currentClue))
    );
    this.results = [];
    this.showBoard();
  }
}
