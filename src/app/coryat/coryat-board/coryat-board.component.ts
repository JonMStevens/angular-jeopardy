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
  private sessionStorageKey = 'coryat_showingBoard';
  constructor(private gameState: GameStateService, private router: Router) {}

  ngOnInit(): void {
    this.getShowingBoardFromStorage();
  }

  showQuestionScreen = (): boolean => this.gameState.currentClue != null;
  showBoard = (): boolean => !this.showQuestionScreen() && this.showingBoard;
  showSetup = (): boolean => !this.showQuestionScreen() && !this.showingBoard;
  goToSetup(): void {
    this.showingBoard = false;
    sessionStorage.setItem(this.sessionStorageKey, 'false');
  }
  goToBoard(): void {
    this.showingBoard = true;
    sessionStorage.setItem(this.sessionStorageKey, 'true');
  }

  getShowingBoardFromStorage(): boolean {
    try {
      const sessionVar: boolean = JSON.parse(
        String(sessionStorage.getItem(this.sessionStorageKey)).toString()
      );
      if (sessionVar === null) return false;
      this.showingBoard = sessionVar;
    } catch (error) {
      return false;
    }
    return true;
  }
}
