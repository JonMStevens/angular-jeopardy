import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-clue-square',
  templateUrl: './clue-square.component.html',
  styleUrls: ['./clue-square.component.css']
})
export class ClueSquareComponent implements OnInit {
  @Input() public clueNumber: number | undefined = undefined;
  @Input() public clicked: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onClueClick(): void {
    this.clicked = true;
  }
}
