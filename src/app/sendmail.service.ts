import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SendmailService {
  private url="http://localhost:4200/api/sentmail"
  constructor(private http:HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  sentMail(data:any):Observable<any>{
    return this.http.post(this.url, data, this.httpOptions)
  }
}
