import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-color-box',
  templateUrl: './input-color-box.component.html',
  styleUrls: ['./input-color-box.component.css']
})
export class InputColorBoxComponent {
  @Output() colorPickedEvent = new EventEmitter<string>();

  changeColor(color: string): void {
    this.colorPickedEvent.emit(color);
  }
}
