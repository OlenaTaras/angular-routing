import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('http://localhost:3000/items/categories').pipe(
      map((resp: {categories: string[]}) => resp.categories)
    );
  }

  getItemsByCategory(category: string) {
    const options = {
      params: new HttpParams().set('category', category)
    };
    return this.http.get('http://localhost:3000/items', options);
  }
}
