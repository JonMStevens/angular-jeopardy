import { Component } from '@angular/core';
import { GameStateService } from '../../game-state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor(public gameState: GameStateService) {}
}
