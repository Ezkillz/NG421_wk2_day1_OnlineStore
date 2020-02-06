import { Component, OnInit } from '@angular/core';
import { Product } from '../Interface/product';
import { ProductService } from '../Services/product.service'
import { ProductDetailComponent } from '../product-detail/product-detail.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ShoppingCart: Product[];

  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.ShoppingCart = this.productService.getShoppingCart();
    VRDisplay;
    this.ShoppingCart.length;
    
  }


}
