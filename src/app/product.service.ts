import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   items;
   private APIurl="http://localhost:4200/api/product?limit=15";
   private APIdetail="http://localhost:4200/api/product";
   private APINEW="http://localhost:4200/api/product?sort=created_at,DESC&limit=4";
   private APIGOOD="http://localhost:4200/api/product?sort=price,DESC&limit=4";
  constructor(
    private http: HttpClient,
  ) {

   }
   getGoodProduct():Observable<any[]> {
    return this.http.get<any[]>(this.APIGOOD);
  }
  getSornprice(url):Observable<any[]>{
    return this.http.get<any[]>(url);
  }
  getNewItems():Observable<any[]> {
    return this.http.get<any[]>(this.APINEW);
  }
  getItems():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl);
  }
  getSignle(id:number): Observable<any>{
    return this.http.get<any>(this.APIdetail+'/'+id);
  }
  Update(id:number,data:any): Observable<any>{
    return this.http.put(this.APIurl+'/'+id,data);
  }
  Add(data:any): Observable<any>{
    return this.http.post(this.APIurl,data);
  }
  Delete(id:number): Observable<any>{
    return this.http.delete(this.APIurl+'/'+id);
  }
  Search(keyword:string): Observable<any>{
    console.log(this.APIurl+'?search='+keyword);
    return this.http.get(this.APIurl+'?search='+keyword);
  }
  
}
