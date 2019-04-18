import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopItem } from './create-shop-item.component';

@Injectable({
  providedIn: 'root'
})
export class CreateShopItemService {

  constructor(private http: HttpClient) {
  }

  public saveShopItem(newShopItem: ShopItem) {
    return this.http.post('http://localhost:3000/items', newShopItem);
  }
}
