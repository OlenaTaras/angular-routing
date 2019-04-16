import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { ShopService } from './shop.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopComponent implements OnInit {
  public categories;
  public category: string;

  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.shopService.getCategories().subscribe((resp) => this.categories = this.transformCategories(resp));
  }

  /**
   * Navigating programmatically
   */
  // public onCategorySelected(category) {
  //   this.router.navigate(['category', category], {relativeTo: this.route})
  // }

  private transformCategories(categories) {
    return categories.map(item => {
      return { value: item, label: item };
    });
  }
}
