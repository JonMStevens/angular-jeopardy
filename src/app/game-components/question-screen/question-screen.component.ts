import { Component, ViewEncapsulation } from '@angular/core';
import { GameStateService } from '../../game-state.service';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css'],
  /*  could have blocks such as <i>
      with view encapsulation you cannot write rules for those blocks in css */
  encapsulation: ViewEncapsulation.None
})
export class QuestionScreenComponent {
  public answerSeen = false;
  private results: number[] = [];
  constructor(
    public gameState: GameStateService,
    public playerService: PlayerService
  ) {}

  public showAnswer(): void {
    this.answerSeen = true;
  }

  private showBoard(): void {
    this.answerSeen = false;
    this.gameState.setCurrentClue(null);
  }

  public onRulingChange(result: number, player: Player): void {
    this.results[player.number] = result;
  }

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
}
