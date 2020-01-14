import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import {PRODUCTS} from '../mock-product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products = [] ;
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
   this.productService.getProducts().subscribe(products => this.products = products);
  }
}
