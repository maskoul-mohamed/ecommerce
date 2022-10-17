import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  product: Product | any;
  id: string | any;
  productSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.productSubscription =this.productService.getProductById(this.id).subscribe(
      (data) => this.product = data
    )
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
  calcNumberOfStars(numberOfStars: number) {
    let numberOfStarsRounded = Math.round(numberOfStars);
    let stars = []
    for (let index = 0; index < numberOfStarsRounded; index++) {
      stars.push('1')
    }
    return stars;
  }

  calculDescountPrice(price: number, discountAmount: number) {
    return Math.round(price - (price * discountAmount / 100));
  }
}
