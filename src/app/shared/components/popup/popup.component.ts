import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  
  @Input() visible!: boolean;
  @Input() title!: string;
  @Input() contentTemplate!: string;
  @Input() resizable!: boolean;
  @Input() closeOnOutsideClick!: boolean;
  @Input() arrayImages: any[] = [];
  @Input() showCloseButton!: boolean;
  @Input() rowIndex!: number;

  @Output() emitVisible = new EventEmitter<boolean>();

  constructor() {}

  sendPropVisible() {
    this.emitVisible.emit(false);
  }

}
