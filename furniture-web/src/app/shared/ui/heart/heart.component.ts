import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ui-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeartComponent {
  @Input() hearted: boolean;
  @Output() clicked = new EventEmitter<boolean>();

  onClick(): void {
    this.hearted = !this.hearted;
    this.clicked.emit(this.hearted);
  }
}
