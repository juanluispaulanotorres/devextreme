import { Component, Input } from '@angular/core';
import DevExpress from 'devextreme';

@Component({
  selector: 'app-load-panel',
  templateUrl: './load-panel.component.html',
  styleUrls: ['./load-panel.component.scss'],
})
export class LoadPanelComponent {
  @Input() visible!: boolean;
  @Input() shadingColor!: string; // "rgba(0,0,0,0.4)"
  @Input() position!: DevExpress.PositionConfig | Function | string; // "{ of: '#employee' }";
  @Input() showIndicator!: boolean;
  @Input() showPane!: boolean;
  @Input() shading!: boolean;
  @Input() hideOnOutsideClick!: boolean;
  @Input() message!: string;
  @Input() width!: number;
  @Input() height!: number;

  constructor() {}

  onShown() {}

  onHidden() {}
}
