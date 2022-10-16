import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getAllProduct():Observable<Products[] | any>{
    return this.httpClient.get<Products[] | any>('https://dummyjson.com/products').pipe(
      map(data => data.products)
    )
  }

  getLimitProducts(limit: number):Observable<Products[] | any>{
    return this.httpClient.get<Products[] | any>(`https://dummyjson.com/products?limit=${limit}`).pipe(
      map(data => data.products)
    )
  }


  getAllCategories():Observable<any> {
    return this.httpClient.get<Products[] | any>('https://dummyjson.com/products/categories')
  } 

  getProductByCategory(category: any):Observable<any> {
    return this.httpClient.get<Products[] | any>('https://dummyjson.com/products/category/' + category)
  } 
}
