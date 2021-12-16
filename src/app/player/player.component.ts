import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player | null = null;
  constructor(private playerService: PlayerService) {}
  ngOnInit(): void {}
  onModelChange(): void {
    this.playerService.savePlayersToSession();
  }
}
