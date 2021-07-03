import { Component, OnInit } from '@angular/core';
import { Clue } from '../clue';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  showBoard = false;
  clickedClue: Clue | undefined;
  constructor() {}

  ngOnInit(): void {}

  onClueClicked(clue: Clue): void {
    if (!clue) {
      return;
    }

    this.clickedClue = clue;
    this.showBoard = false;
  }
  onQuestionComplete(): void {
    this.showBoard = true;
  }
}
