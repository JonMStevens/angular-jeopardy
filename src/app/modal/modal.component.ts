import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() noClicked = new EventEmitter();
  @Output() yesClicked = new EventEmitter();
  @Input() title = '';
  @Input() description = '';
  constructor() {}

  noClick(): void {
    this.noClicked.emit();
  }
  yesClick(): void {
    this.yesClicked.emit();
  }
}
