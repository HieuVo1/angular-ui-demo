import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url="http://localhost:4200/api/user";
  private created="http://localhost:4200/api/user/create";
  private isLogged=false;
  private data:any;
  private userCorrect;
  private hasAcount=false;
  constructor(private http:HttpClient,private route:Router) {
    this.isLogged=false;
   }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  async getUserDetail(email,password)
  {
    this.http.post(this.url,{email,password},this.httpOptions).subscribe(data=>
      {
        this.data=data;
        if(this.data!=undefined)
        {
          this.userCorrect=this.data;
          this.isLogged=true;
          if(confirm("success")){
            this.route.navigate(['/account']);
          }
        }
      },err =>  confirm("Invalid email/password"))
  }
  async create(data)
  {
    const user={name:data.firstname+data.lastname,email:data.email,password:data.password}
     this.http.post(this.created,user,this.httpOptions).subscribe(data=>{
       this.data=data;
       if(this.data!=undefined){
        if(confirm("success")){
          this.route.navigate(['/login']);
        }
       }
     })
  }
  getLogged()
  {
    return this.isLogged;
  }
  setLogout()
  {
    this.isLogged=false;
  }
  getAccount()
  {
    return this.userCorrect;
  }
}
