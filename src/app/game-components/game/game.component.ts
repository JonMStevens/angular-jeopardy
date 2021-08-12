import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameStateService } from '../../game-state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private gameState: GameStateService, private router: Router) {
    /* todo: is there a way to do this in router module or if not maybe import router only when needed? */
    if (gameState.inCoryatMode) {
      this.router.navigate(['/menu']);
    }
  }
  showBoard = (): boolean => this.gameState.currentClue == null;
}
