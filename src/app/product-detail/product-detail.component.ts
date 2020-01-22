import { Component, OnInit,OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService }  from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit,OnChanges {
  product;
  id;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  ngOnChanges(){
    this.getProduct();
  }
  getProduct(): void {
    this.route.params.subscribe(params => this.id= params['id'])
    console.log(this.id);
   this.productService.getSignle(this.id).subscribe(pro=>this.product=pro);
  }

  goBack(): void {
    this.location.back();
  }
  

}
