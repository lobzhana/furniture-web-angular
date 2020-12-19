import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ui-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss'],
})
export class QuantityInputComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() value = 0;
  @Input() minValue = 0;
  @Input() maxValue = 0;
  @Output() valueChanged = new EventEmitter<number>();

  ngOnInit(): void {}

  increase(): void {
    this.value++;
    this.valueChanged.emit(this.value);
  }

  decrease(): void {
    this.value--;
    this.valueChanged.emit(this.value);
  }
}
