import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Db {
  constructor(private httpClient: HttpClient) {}

  public _products(): Observable<
    {
      id: string;
      title: string;
      status: number;
      price: number;
      oldPrice: number;
      imageUri: string;
    }[]
  > {
    return this.httpClient
      .get<
        {
          id: string;
          title: string;
          status: number;
          price: number;
          oldPrice: number;
          imageUri: string;
        }[]
      >('assets/data/shop/products.json')
      .pipe(delay(200));
  }
}
