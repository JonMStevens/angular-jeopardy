import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clue } from '../clue';
import { GameStateService } from '../game-state.service';
@Component({
  selector: 'app-clue-square',
  templateUrl: './clue-square.component.html',
  styleUrls: ['./clue-square.component.css']
})
export class ClueSquareComponent implements OnInit {
  @Input() public clue: Clue | null = null;
  @Output() public clueClick = new EventEmitter();
  clicked = false;

  constructor(public gameState: GameStateService) {}

  ngOnInit(): void {}

  onClueClick(): void {
    if (this.gameState.inCoryatMode) {
      this.gameState.currentClue = this.clue;
      return;
    }

    if (!this.clicked) {
      this.clicked = true;
      this.gameState.currentClue = this.clue;
      return;
    }
  }
}
