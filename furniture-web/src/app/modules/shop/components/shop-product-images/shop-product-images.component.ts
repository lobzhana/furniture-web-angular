import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shop-product-images',
  templateUrl: './shop-product-images.component.html',
  styleUrls: ['./shop-product-images.component.scss'],
})
export class ShopProductImagesComponent implements AfterViewInit {
  @Input() images: string[] = [];
  @ViewChild('imgBig') imgBig: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.images && this.images.length) {
      this.selectImg(this.images[0]);
    }
  }

  selectImg(img: string): void {
    this.imgBig.nativeElement.src = img;
  }
}
