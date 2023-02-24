import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.scss'],
})
export class PopupConfirmationComponent {
  @Input() visible!: boolean;
  @Input() title!: string;
  @Input() contentTemplate!: string;
  @Input() resizable!: boolean;
  @Input() closeOnOutsideClick!: boolean;
  @Input() showCloseButton!: boolean;
  @Input() width!: number;
  @Input() height!: number;

  @Output() emitVisible = new EventEmitter<boolean>();
  @Output() emitButton = new EventEmitter<string>();

  constructor() {}

  sendPropVisible() {
    this.emitVisible.emit(false);
  }

  sendButton(clickEvent: any) {
    const buttonPressed: string = clickEvent.element.innerText;
    this.emitButton.emit(buttonPressed);
  }
}
