import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
import { mergeAll,filter,toArray} from 'rxjs/operators';
import {Product} from './product/product';
import {PRODUCTS} from './mock-product';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   items;
   result:Product;
  constructor(
    private http: HttpClient,
  ) {

   }
  getItems() {
     return  this.http.get('/assets/product.json');
  }
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
  // getItem(id:number)
  // {
  //   console.log(id);
  //   this.items=this.http.get('/assets/product.json');
  //   // this.items.subscribe(val=> console.log( val));
  //   // const x=this.items.pipe(filter(product => product.id==id));
  // //  x.subscribe(val =>
  // //     console.log(val)
  // //   );
  //   console.log(this.items);
  //   this.items.pipe(mergeAll(),
  //   filter(product => product.id==id),toArray()
  //   ).subscribe(val => this.result===val);
  //   console.log(this.result);
  //   return this.result;
    
  // }
  getProduct(id: number)  {
    PRODUCTS.find(product => product.id === id);
    this.result=PRODUCTS.find(product => product.id === id);
    return this.result;
    // return of(PRODUCTS.find(product => product.id === id));
  }
  
}
