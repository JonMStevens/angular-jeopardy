import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-clue-square',
  templateUrl: './clue-square.component.html',
  styleUrls: ['./clue-square.component.css']
})
export class ClueSquareComponent implements OnInit {
  @Input() public clueNumber: number | null = null;
  @Output() public clueClick = new EventEmitter();
  clicked = false;

  constructor() {}

  ngOnInit(): void {}

  onClueClick(): void {
    if (!this.clicked) {
      this.clicked = true;
      this.clueClick.emit();
    }
  }
}
