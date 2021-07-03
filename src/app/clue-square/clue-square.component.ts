import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-clue-square',
  templateUrl: './clue-square.component.html',
  styleUrls: ['./clue-square.component.css'],
})
export class ClueSquareComponent implements OnInit {
  @Input() public clueNumber: number | undefined = undefined;
  clicked = false;

  constructor() {}

  ngOnInit(): void {}

  onClueClick(): void {
    this.clicked = true;
  }
}
