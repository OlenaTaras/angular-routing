import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  DropdownModule,
  InputTextareaModule,
  InputTextModule
} from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopComponent } from './shop/shop.component';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateShopItemComponent } from './create-shop-item/create-shop-item.component';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'category/:category', component: ShopItemComponent
  },
  {
    path: 'create', component: CreateShopItemComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ShopItemComponent,
    CreateShopItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
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
