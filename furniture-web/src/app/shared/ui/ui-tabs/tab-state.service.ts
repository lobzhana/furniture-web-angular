import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UiTabComponentService {
  private activeTab = new BehaviorSubject<string>('');
  public activeTab$ = this.activeTab.asObservable();

  constructor() {}

  changeTab(tabName: string): void {
    this.activeTab.next(tabName);
  }
}
