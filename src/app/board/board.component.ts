import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Clue } from '../clue';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Output() public clueClick = new EventEmitter<Clue>();

  constructor() {}

  ngOnInit(): void {}

  onClueClick(clue: Clue): void {
    this.clueClick.emit(clue);
  }
}
