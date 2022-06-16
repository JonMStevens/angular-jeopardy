import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-scorer',
  templateUrl: './player-scorer.component.html',
  styleUrls: ['./player-scorer.component.css']
})
export class PlayerScorerComponent implements OnInit {
  @Input() public player: Player | null = null;
  @Output() private rulingChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  onRulingChange(ruling: number): void {
    this.rulingChange.emit(ruling);
  }
}
