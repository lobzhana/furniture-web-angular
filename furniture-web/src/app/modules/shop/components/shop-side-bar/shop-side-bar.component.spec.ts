import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSideBarComponent } from './shop-side-bar.component';

describe('ShopSideBarComponent', () => {
  let component: ShopSideBarComponent;
  let fixture: ComponentFixture<ShopSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
