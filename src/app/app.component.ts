import { Component } from '@angular/core';
import { GameStateService } from './game-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-jeopardy';
  constructor(private gameState: GameStateService) {}
  showBoard = (): boolean => this.gameState.currentClue == null; 
}
