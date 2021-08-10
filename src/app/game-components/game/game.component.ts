import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../game-state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  ngOnInit(): void {}
  constructor(
    private gameState: GameStateService,
  ) {}
  showBoard = (): boolean => this.gameState.currentClue == null;
}
