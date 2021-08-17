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

  ngOnInit(): void {
    document.body.style.overflowY = 'hidden';
  }
  ngOnDestroy(): void {
    document.body.style.overflowY = 'unset';
  }
  showBoard = (): boolean => this.gameState.currentClue == null;
  screenScroll(id: string): void {
    if (!id) return;

    const element = document.querySelector('#' + id);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth' });
  }
}
