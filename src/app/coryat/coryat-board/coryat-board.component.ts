import { Component, OnInit } from '@angular/core';
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
  constructor(public gameState: GameStateService) {}

  ngOnInit(): void {
    this.getShowingBoardFromStorage();
  }

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
