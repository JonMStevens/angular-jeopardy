import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.css']
})
export class EndScreenComponent implements OnInit {
  public players: Player[] = [];
  constructor(private playerService: PlayerService) {}

  public ngOnInit(): void {
    /* create copy and sort copy
    retain the entered order of players */
    Object.assign(this.players, this.playerService.players);
    this.players.sort((a, b) => b.score - a.score);
  }
}
