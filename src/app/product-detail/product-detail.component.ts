import { Component, OnInit, Input, Output } from '@angular/core';
import {Product} from '../Interface/product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  ngOnInit(): void {
    }
  @Input() product:Product;
  constructor(){

   }

  @Output() productAdded: EventEmitter<Product> = new EventEmitter<Product>();
  OnInit() : void{};


  addToCart() : void{
    this.productAdded.emit(this.product)
  };

}
