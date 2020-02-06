import { Component, OnInit} from '@angular/core';
import {ProductService} from './Services/product.service';
import { Product } from './Interface/product';
import products from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Products: Product[ ] ;

    constructor(private productService:ProductService){

    }
  ngOnInit(){
    this.Products = this.productService.getProducts();
  }
}
