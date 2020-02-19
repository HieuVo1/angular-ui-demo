import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url="http://localhost:4200/api/order"
  constructor(private http:HttpClient) { }

  getOrder():Observable<any>{
    return this.http.get(this.url)
  }
}
