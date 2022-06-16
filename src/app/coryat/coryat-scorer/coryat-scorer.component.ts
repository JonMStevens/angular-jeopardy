import { Component } from '@angular/core';
import { GameStateService } from 'src/app/game-state.service';
import { Player } from 'src/app/player';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-coryat-scorer',
  templateUrl: './coryat-scorer.component.html',
  styleUrls: ['./coryat-scorer.component.css']
})
export class CoryatScorerComponent {
  results: number[] = [];

  constructor(
    private gameState: GameStateService,
    public playerService: PlayerService
  ) {}

  public awardPoints(): void {
    let clueValue = 0;
    const sub = this.gameState.currentClue$.subscribe(
      (clue) => (clueValue = this.gameState.getClueValue(clue))
    );
    sub.unsubscribe();
    this.results.forEach(
      (result, i) => (this.playerService.players[i].score += result * clueValue)
    );
    this.results = [];
    this.showBoard();
    this.playerService.savePlayersToSession();
  }

  private showBoard(): void {
    this.gameState.setCurrentClue(null);
  }

  public onRulingChange(result: number, player: Player): void {
    this.results[player.number] = result;
  }
}
