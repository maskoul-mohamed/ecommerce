import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { LeatestProductsComponent } from './component/leatest-products/leatest-products.component';
import { ShopLiftPageComponent } from './component/shop-lift-page/shop-lift-page.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { TopNavFillterComponent } from './component/top-nav-fillter/top-nav-fillter.component';
import { LeftSideFiltterComponent } from './component/left-side-filtter/left-side-filtter.component';
import { DiscountFilterComponent } from './component/discount-filter/discount-filter.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { LogInPageComponent } from './component/log-in-page/log-in-page.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

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
    TopNavFillterComponent,
    LeftSideFiltterComponent,
    DiscountFilterComponent,
    FooterComponent,
    NotFoundPageComponent,
    LogInPageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
