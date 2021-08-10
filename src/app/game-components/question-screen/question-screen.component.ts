import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
export class QuestionScreenComponent implements OnInit {
  answerSeen = false;
  results: number[] = [];
  constructor(
    public gameState: GameStateService,
    public playerService: PlayerService
  ) {}

  ngOnInit(): void {
    if (!this.gameState.currentClue) {
      // error, should never show this without a clue
      // todo throw error
      this.showBoard();
      return;
    }
  }

  showAnswer(): void {
    this.answerSeen = true;
  }

  showBoard(): void {
    this.answerSeen = false;
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
