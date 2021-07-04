import { Component, OnInit } from '@angular/core';
import { Clue } from '../clue';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  answerSeen = false;

  constructor(private gameState: GameStateService) {}

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

  public get clue(): Clue | null {
    return this.gameState.currentClue;
  }
}
