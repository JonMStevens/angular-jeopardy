import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() private noClicked = new EventEmitter();
  @Output() private yesClicked = new EventEmitter();
  @Input() public title = '';
  @Input() public description = '';
  constructor() {}

  public noClick(): void {
    this.noClicked.emit();
  }
  public yesClick(): void {
    this.yesClicked.emit();
  }
}
