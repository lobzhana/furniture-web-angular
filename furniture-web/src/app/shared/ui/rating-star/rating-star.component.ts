import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

export interface RatingStarConfig {
  full?: boolean;
  half?: boolean;
  empty?: boolean;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ui-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingStarComponent implements OnChanges {
  @Input() stars: number;
  @Input() width = 14.8;
  @Input() height = 14.1;
  state: RatingStarConfig[] = [
    { empty: true },
    { empty: true },
    { empty: true },
    { empty: true },
    { empty: true },
  ];

  isEmpty = (s: number) => s <= 0;
  isHalf = (s: number) => s > 0 && s < 1;
  isFull = (s: number) => s >= 1 && s <= 5;

  constructor() {}

  ngOnChanges(): void {
    if (!this.stars) {
      return;
    }

    this.resetState(this.stars);
  }

  resetState(stars: number): void {
    let starIndex = 0;
    while (stars > 0) {
      this.state[starIndex] = {
        empty: this.isEmpty(stars),
        half: this.isHalf(stars),
        full: this.isFull(stars),
      };
      stars--;
      starIndex++;
    }
  }
}
