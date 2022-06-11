import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public showingPeekModeModal = false;
  constructor(private gameStateService: GameStateService) {}

  ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log(
      'Please note that if you are playing in game mode, the game includes a peek feature which is on by default. ' +
        'When selecting clues the answers will be logged here for a possible host or presenters benefit. ' +
        `Peek mode is currently ${
          this.gameStateService.allowPeeking ? 'enabled' : 'disabled'
        }. ` +
        'You can choose to prevent or allow these messages by clicking on the question mark button on the main menu.'
    );
  }
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

  public preventPeek(): void {
    this.gameStateService.allowPeeking = false;
    this.hidePeekModeModal();
    // eslint-disable-next-line no-console
    console.log('Peek messages prevented.');
  }

  public allowPeek(): void {
    this.gameStateService.allowPeeking = true;
    this.hidePeekModeModal();
    // eslint-disable-next-line no-console
    console.log('Peek messages allowed.');
  }

  public showPeekModeModal(): void {
    this.showingPeekModeModal = true;
  }
  private hidePeekModeModal(): void {
    this.showingPeekModeModal = false;
  }

  public getPeekDescription = (): string =>
    'Peek mode allows a host/presenter to see the answer before the players buzz in. \
    As of now this feature is implemented via messages to the console. \
    Click "No" to suppress the peek messages, or click "Yes" and press Ctrl + Shift + I and open the console.';
}
