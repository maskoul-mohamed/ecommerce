import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/interface/products.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shop-lift-page',
  templateUrl: './shop-lift-page.component.html',
  styleUrls: ['./shop-lift-page.component.css']
})
export class ShopLiftPageComponent implements OnInit {

  productsList:Products | any;
  categories:any;

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
   this.getAllProducts()
   this.getCategories()
  }

  getAllProducts(){
    this.productService.getAllProduct().subscribe(
      (data : Products) => {
        this.productsList = data
        console.log(this.productsList)

      }
    )
  }

  getCategories(){
    this.productService.getAllCategories().subscribe((data: any) => {
      this.categories = data
    })
  }
  onChange(e: any){
    let value = e.target.value;
    if(value == "all"){
      this.getAllProducts()
    }
    else {
      this.getProductByCategory(value)
    }
  }

  getProductByCategory(category:string){
    this.productService.getProductByCategory(category).subscribe(
      (data : Products) => {
        this.productsList = data
        console.log(this.productsList)

      }
    )
  }
}
