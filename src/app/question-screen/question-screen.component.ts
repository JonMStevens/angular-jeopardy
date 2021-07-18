import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionScreenComponent implements OnInit {
  answerSeen = false;

  constructor(
    public gameState: GameStateService,
    public playerService: PlayerService
  ) {}

  ngOnInit(): void {
    if (!this.gameState.currentClue) {
      // error, should never show this without a clue
      // todo throw error
    }
  }

  showAnswer(): void {
    this.answerSeen = true;
  }

  showBoard(): void {
    this.answerSeen = false;
    this.gameState.currentClue = null;
  }

  awardPoints(player: Player): void {
    player.score += this.gameState.getClueValue(this.gameState.currentClue);
    this.showBoard();
  }
}
