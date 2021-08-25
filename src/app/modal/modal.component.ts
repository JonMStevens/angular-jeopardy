import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() noClicked = new EventEmitter();
  @Output() yesClicked = new EventEmitter();
  @Input() title = '';
  @Input() description = '';
  constructor() {}

  ngOnInit(): void {}

  noClick(): void {
    this.noClicked.emit();
  }
  yesClick(): void {
    this.yesClicked.emit();
  }
}
