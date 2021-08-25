import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBorderAll, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { GameStateService } from 'src/app/game-state.service';

@Component({
  selector: 'app-coryat-board',
  templateUrl: './coryat-board.component.html',
  styleUrls: ['./coryat-board.component.css']
})
export class CoryatBoardComponent implements OnInit {
  showingBoard = true;
  faBorderAll = faBorderAll;
  faUsersCog = faUsersCog;
  constructor(private gameState: GameStateService, private router: Router) {}

  ngOnInit(): void {}

  showQuestionScreen = (): boolean => this.gameState.currentClue != null;
  showBoard = (): boolean => !this.showQuestionScreen() && this.showingBoard;
  showSetup = (): boolean => !this.showQuestionScreen() && !this.showingBoard;
  goToSetup(): void {
    this.showingBoard = false;
  }
  goToBoard(): void {
    this.showingBoard = true;
  }
}
