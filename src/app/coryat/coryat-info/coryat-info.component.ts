import { Component } from '@angular/core';
import { Player } from 'src/app/player';
@Component({
  selector: 'app-coryat-info',
  templateUrl: './coryat-info.component.html',
  styleUrls: ['./coryat-info.component.css']
})
export class CoryatInfoComponent {
  demoPlayer: Player = { number: 0, name: 'Player 1', score: 0 };
  constructor() {}
}
