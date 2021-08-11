import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameStateService } from '../game-state.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    private router: Router,
    private playerService: PlayerService,
    private gameStateService: GameStateService
  ) {}

  ngOnInit(): void {}
  navToGame(): void {
    this.gameStateService.inGameMode = true;
    this.gameStateService.reset();
    this.playerService.reset();
    this.router.navigate(['/game']);
  }
  navToCoryat(): void {
    this.gameStateService.inGameMode = false;
    this.gameStateService.reset();
    this.playerService.reset();
    this.router.navigate(['/coryat']);
  }
}
