import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { LeatestProductsComponent } from './component/leatest-products/leatest-products.component';
import { ShopLiftPageComponent } from './component/shop-lift-page/shop-lift-page.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    HeroSectionComponent,
    LeatestProductsComponent,
    ShopLiftPageComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
