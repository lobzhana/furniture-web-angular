import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { UiTabComponentService } from './tab-state.service';
import { UiTabComponent } from './ui-tab/ui-tab.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ui-tabs',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabsComponent implements AfterContentInit {
  @ContentChildren(UiTabComponent) children: QueryList<UiTabComponent>;
  headers: { title: string; active: boolean }[] = [];

  constructor(private tabService: UiTabComponentService) {}

  ngAfterContentInit(): void {
    this.headers = this.extractHeaders();
    this.selectTab(this.headers[0]);
  }

  extractHeaders(): { title: string; active: boolean }[] {
    const headers = [];
    this.children.forEach((tab) => {
      headers.push({ title: tab.title, active: false });
    });
    return headers;
  }

  selectTab(tab: { title: string; active: boolean }): void {
    this.activateTab(tab);
    this.tabService.changeTab(tab.title);
  }

  activateTab(tab: { title: string; active: boolean }): void {
    this.headers.forEach((h) => (h.active = false));
    tab.active = true;
  }
}
