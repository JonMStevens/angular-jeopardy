import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clue-square',
  templateUrl: './clue-square.component.html',
  styleUrls: ['./clue-square.component.css']
})
export class ClueSquareComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
  
  clicked: boolean = false;
  clueClick(): void {
    this.clicked = true;
  }
}
