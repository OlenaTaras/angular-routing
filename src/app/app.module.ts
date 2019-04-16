import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { DropdownModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopComponent } from './shop/shop.component';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'category/:category', component: ShopItemComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ShopItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    MenubarModule,
    TableModule,
    DropdownModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
