import { Component, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() player: Player | null = null;
  constructor(private playerService: PlayerService) {}
  onModelChange(): void {
    this.playerService.savePlayersToSession();
  }
}
