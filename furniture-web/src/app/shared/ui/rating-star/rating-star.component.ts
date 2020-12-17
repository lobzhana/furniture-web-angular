import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ui-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingStarComponent implements OnInit {
  constructor() {}

  @Input() stars: number;

  ngOnInit(): void {}
}
