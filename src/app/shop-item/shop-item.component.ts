import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop/shop.service';
import { switchMap } from 'rxjs/internal/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopItemComponent implements OnInit {
categories;
  constructor(private route: ActivatedRoute, private shopService: ShopService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((params: { category: string }) => params.category),
      switchMap((category) => this.shopService.getItemsByCategory(category))
    ).subscribe((resp: {items: any[]}) => this.categories = resp.items);

    // this.route.queryParams.subscribe(params => console.log(params));
    // this.route.fragment.subscribe(fragment => console.log(fragment));
  }

}
