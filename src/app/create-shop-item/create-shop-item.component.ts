import { Component, OnInit } from '@angular/core';
import { CreateShopItemService } from './create-shop-item.service';
import * as _ from 'lodash';
export interface ShopItem {
  id?: string;
  title: string;
  price: string;
  description: string;
  category: string;
  subcategory: string;
}
@Component({
  selector: 'app-create-shop-item',
  templateUrl: './create-shop-item.component.html',
  styleUrls: ['./create-shop-item.component.css']
})
export class CreateShopItemComponent implements OnInit {
public newShopItem: any = {};
  constructor(private createShopService: CreateShopItemService) { }

  ngOnInit() {
  }

  public saveNewShopItem() {
    if (_.isEmpty(this.newShopItem)) {return; }
    this.createShopService.saveShopItem(this.newShopItem).subscribe(resp => console.log(resp));
  }

  private validateShopItem(shopItem: ShopItem) {
    const validatedShopItem = {
      title: shopItem.title,
      price: shopItem.price,
      description: shopItem.description,
      category: shopItem.category || 'other',
      subcategory: shopItem.subcategory,
    };
  }

}
