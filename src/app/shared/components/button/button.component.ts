import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text!: string;
  @Input() type!: string;
  @Input() useSubmitBehavior!: boolean;
  @Input() icon!: string;
  @Input() disabled!: boolean;

  @Output() onClickEvent = new EventEmitter<any>;

  onClick() {
    this.onClickEvent.emit();
  }

}
