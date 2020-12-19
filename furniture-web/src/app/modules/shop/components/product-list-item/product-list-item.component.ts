import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ProductListItem } from '../../../../core/models/product-list-item';
import { PRODUCT_STATUS } from '../../../../core/models/product-status';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListItemComponent {
  @Input() product: ProductListItem;
  @Output() hearted = new EventEmitter<boolean>();
  @Output() unhearted = new EventEmitter<boolean>();

  isSale = (product: ProductListItem) => product.status === PRODUCT_STATUS.SALE;

  onHeartClicked(value: boolean): void {
    if (value) {
      this.hearted.emit();
    } else {
      this.unhearted.emit();
    }
  }
}
