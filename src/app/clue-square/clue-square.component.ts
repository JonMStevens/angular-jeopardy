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

  constructor(public gameState: GameStateService) {}

  ngOnInit(): void {}

  onClueClick(): void {
    if (this.gameState.isInCoryatMode()) {
      this.gameState.setCurrentClue(this.clue);
      this.clueClick.emit();
      return;
    }

    if (!this.clue) return;
    if (!this.clue.clicked) {
      this.clue.clicked = true;
      this.gameState.setCurrentClue(this.clue);
      if (this.gameState.allowPeeking) {
        // eslint-disable-next-line no-console
        console.log(`Answer: ${this.clue?.answer}`);
      }
      this.clueClick.emit();
      return;
    }
  }
}
