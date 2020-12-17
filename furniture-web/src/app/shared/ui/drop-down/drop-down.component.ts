import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

export interface DropDownItem {
  key: any;
  value: any;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ui-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropDownComponent {
  @Input() selectedItem: DropDownItem;
  @Input() items: DropDownItem[];
  @Output() changed = new EventEmitter<DropDownItem>();

  @ViewChild('itemsContainer') itemsContainer: ElementRef<HTMLElement>;

  expanded = false;

  constructor(private selfRef: ElementRef) {}

  toggle(): void {
    this.expanded = !this.expanded;
  }

  select(item: DropDownItem): void {
    this.selectedItem = item;
    this.toggle();
    this.changed.emit(item);
  }

  @HostListener('document:click', ['$event.target'])
  click(targetElement: HTMLElement): void {
    const isOutsideClick = !this.selfRef.nativeElement.contains(targetElement);
    if (isOutsideClick) {
      this.expanded = false;
    }
  }
}
