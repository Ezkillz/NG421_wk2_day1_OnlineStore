import { Injectable, Input } from '@angular/core';
import {Product} from '../Interface/product'
import products, {} from '../products';
import { PassThrough } from 'stream';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Input() default;
  ShoppingCart: Product[ ];
  Products: Product[ ] = this.default;

  constructor( ){
    this.Products = products;
  }
  
  getProducts(): Product [] {
    return this.Products;
  }

  getShoppingCart(): Product[]{
    return this.ShoppingCart;
  }

  addToCart(product:Product){
    this.ShoppingCart.push(product);
  }

}
