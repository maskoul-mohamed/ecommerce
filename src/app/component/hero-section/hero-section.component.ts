import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { Products } from 'src/app/interface/products.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  sliderProducts : Products | any = [];
  randomNumbers : number[] = [];
  sliderProductsSubscription : Subscription | any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.random(3);
    this.getProducts()
  }

  getProducts(){
    this.sliderProductsSubscription = this.productService.getLimitProducts(10).subscribe(
      (data) => {
        for(let i = 0; i< this.randomNumbers.length; i++){
          this.sliderProducts.push(data[this.randomNumbers[i]])
        }
      }
    )
  }

  

  random(tries: number){
    for(let i = 0; i< tries; i++){
    
      this.randomNumbers.push(Math.floor(Math.random() * 10)); 
    }
  }
}
