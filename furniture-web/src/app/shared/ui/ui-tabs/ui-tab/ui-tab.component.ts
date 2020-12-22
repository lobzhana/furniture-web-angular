import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiTabComponentService } from '../tab-state.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ui-tab',
  templateUrl: './ui-tab.component.html',
  styleUrls: ['./ui-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabComponent implements AfterContentInit, OnChanges {
  @Input() title: string;
  visible$: Observable<boolean>;

  constructor(private tabService: UiTabComponentService) {}

  ngAfterContentInit(): void {
    this.configureActiveTab();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes detected in uiTab:');
    console.log(changes);
  }

  configureActiveTab(): void {
    this.visible$ = this.tabService.activeTab$.pipe(
      map((tab) => tab === this.title)
    );
  }
}
