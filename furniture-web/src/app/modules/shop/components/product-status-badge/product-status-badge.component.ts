import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { PRODUCT_STATUS } from '../../../../core/models/product-status';

@Component({
  selector: 'app-product-status-badge',
  templateUrl: './product-status-badge.component.html',
  styleUrls: ['./product-status-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStatusBadgeComponent implements OnInit {
  @Input() statusCode: number;

  settings = {
    [PRODUCT_STATUS.NEW]: { className: 'new', title: 'New' },
    [PRODUCT_STATUS.SALE]: { className: 'sale', title: 'Sale' },
  };

  constructor() {}

  ngOnInit(): void {}
}
