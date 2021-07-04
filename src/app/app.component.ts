import { Component } from '@angular/core';
import { Clue } from './clue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-jeopardy';
  showBoard = true;
  clickedClue: Clue | null = null;
  onClueClick(clue: Clue): void {
    if (!clue) {
      return;
    }

    this.showBoard = false;
    this.clickedClue = clue;
  }
  onQuestionComplete(): void {
    this.showBoard = true;
  }
}
