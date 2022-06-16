import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GameStateService } from '../game-state.service';

@Injectable({
  providedIn: 'root'
})
export class GameModeGuard implements CanActivate {
  constructor(private gameState: GameStateService, private router: Router) {}

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /* if in game mode return true */
    if (this.gameState.isInGameMode()) {
      return true;
    }

    return this.router.parseUrl('/menu');
  }
}
