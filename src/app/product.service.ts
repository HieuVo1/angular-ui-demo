import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   items;
   private APIurl="http://5e1fba80e31c6e0014c5ff3c.mockapi.io/API/employee";
  constructor(
    private http: HttpClient,
  ) {

   }
  getItems():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl);
  }
  getSignle(id:number): Observable<any>{
    return this.http.get<any>(this.APIurl+'/'+id);
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
