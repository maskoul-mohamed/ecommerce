import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/interface/products.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-leatest-products',
  templateUrl: './leatest-products.component.html',
  styleUrls: ['./leatest-products.component.css']
})
export class LeatestProductsComponent implements OnInit,OnDestroy {

  limitProducts: Products | any;
  productsLimitSubscription: Subscription | undefined;

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.getLimitProducts(6)
  }

  getLimitProducts(limit: number) {
    this.productsLimitSubscription = this.productService.getLimitProducts(limit).subscribe(
      (data: Products) => this.limitProducts = data
    )
  }

  calculDescountPrice(price : number,discountAmount:number){
    return Math.round(price-(price*discountAmount/100));
   }

  ngOnDestroy(): void {
    this.productsLimitSubscription?.unsubscribe();
  }
}