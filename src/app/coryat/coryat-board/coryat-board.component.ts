import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameStateService } from 'src/app/game-state.service';

@Component({
  selector: 'app-coryat-board',
  templateUrl: './coryat-board.component.html',
  styleUrls: ['./coryat-board.component.css']
})
export class CoryatBoardComponent implements OnInit {
  constructor(private gameState: GameStateService, private router: Router) {}

  ngOnInit(): void {}
  showBoard = (): boolean => this.gameState.currentClue == null;
}
