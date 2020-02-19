import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import {Router, ActivatedRoute} from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products :any[] ;
products1 :any[] ;
products2 :any[] ;
products3 :any[] ;
products4 :any[] ;
productss:any[];
pages=[1,2,3,4,5];
url="";
  constructor(
    private productService: ProductService,
    private route:Router,
    private activatedRoute: ActivatedRoute
  ) { }
  isChecked1=false;
  isChecked2=false;
  isChecked3=false;
  isChecked4=false;
  isckeckedall=true;
  category;
  str1="http://localhost:4200/api/product?filter=price||$gte||0&filter=price||$lte||100&limit=15";
  str2="http://localhost:4200/api/product?filter=price||$gte||100&filter=price||$lte||200&limit=15";
  str3="http://localhost:4200/api/product?filter=price||$gte||200&filter=price||$lte||300&limit=15";
  str4="http://localhost:4200/api/product?filter=price||$gte||300&limit=15";
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => console.log(params['page']));
    // this.getList();
    this.getPrice();
    this.getProduct();
  }
  getList() {
   this.productService.getItems().subscribe(products => this.products = products);
  }
  getProduct(): void {
    this.activatedRoute.params.subscribe(params => this.category=params['category'])
    if(this.category!=null)
    {
      this.url="http://localhost:4200/api/product?filter=category_url||$eq||"+this.category+"&limit=15"
      this.productService.getSornprice(this.url).subscribe(products => this.products = products);
    }    
    else{
      this.productService.getItems().subscribe(products => this.products = products);
    }
    
  }

  getPrice(){
    this.productService.getSornprice(this.str1).subscribe(products => this.products1 = products);
    this.productService.getSornprice(this.str2).subscribe(products => this.products2 = products);
    this.productService.getSornprice(this.str3).subscribe(products => this.products3 = products);
    this.productService.getSornprice(this.str4).subscribe(products => this.products4 = products);
  }
  checkValue(event: any){
   if(this.isChecked1==false&&this.isChecked2==false&&this.isChecked3==false&&this.isChecked4==false)
   {
     this.isckeckedall=true;
   }
   else{
     this.isckeckedall=false;
   }
   
}
}
