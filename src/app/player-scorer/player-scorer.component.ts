import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-scorer',
  templateUrl: './player-scorer.component.html',
  styleUrls: ['./player-scorer.component.css']
})
export class PlayerScorerComponent implements OnInit {
  @Input() player: Player | null = null;
  @Output() rulingChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  onRulingChange(ruling: number): void {
    console.log('changed ' + ruling);
    this.rulingChange.emit(ruling);
  }
}
