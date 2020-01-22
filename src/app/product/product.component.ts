import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products :any[] ;
pages=[1,2,3,4,5];
  constructor(
    private productService: ProductService,
    private route:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => console.log(params['page']));
    this.getList();
  }
  getList() {
   this.productService.getItems().subscribe(products => this.products = products);
  }
}
