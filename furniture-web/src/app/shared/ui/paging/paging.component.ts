import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ui-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagingComponent implements OnChanges {
  @Input() total: number;
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter<number>();

  pages: number[];

  isCurrent = (page: number) => this.currentPage === page;
  isLast = () => this.currentPage === this.pages.length;
  isFirst = () => this.currentPage === 1;

  constructor() {}

  ngOnChanges(): void {
    this.setup();
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }

  setup(): void {
    if (!this.total || !this.pageSize) {
      return;
    }

    const pages = [];
    const numberOfPages = this.total / this.pageSize + 1;
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }

    this.pages = pages;
  }

  previous(): void {
    if (this.isFirst()) {
      return;
    }

    this.changePage(this.currentPage - 1);
  }

  next(): void {
    if (this.isLast()) {
      return;
    }

    this.changePage(this.currentPage + 1);
  }
}
