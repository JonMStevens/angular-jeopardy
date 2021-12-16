import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    private playerService: PlayerService,
    private gameStateService: GameStateService
  ) {}

  ngOnInit(): void {}
  navToGame(): void {
    this.changeMode(false);
  }
  navToCoryat(): void {
    this.changeMode(true);
  }
  changeMode(inCoryatMode: boolean): void {
    if (inCoryatMode) {
      this.gameStateService.setToCoryatMode();
    } else {
      this.gameStateService.setToGameMode();
    }
  }
}
