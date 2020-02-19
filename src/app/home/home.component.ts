import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public status=false;
public newProduct:any[];
public goodProduct:any[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getNewProduct();
    this.getgoodProduct();
  }
  getgoodProduct(){
    this.productService.getGoodProduct().subscribe(product => this.goodProduct= product)
  }
  getNewProduct(){
    this.productService.getNewItems().subscribe(products => this.newProduct = products);
  }
  statusNext(){
    console.log(this.status);
  }
  statusPrev(){
    console.log(1);
  }
}
