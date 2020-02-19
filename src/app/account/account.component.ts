import { Component, OnInit } from '@angular/core';
import{AuthserviceService} from '../authservice.service';
import{OrderService} from '../order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public orders:any[];
  public info;
  constructor(
    private orderService:OrderService,
    private authService:AuthserviceService,
    private route:Router) { }

  ngOnInit() {
    this.getOrder();
    this.getInfo();
  }
  getOrder()
  {
    this.orderService.getOrder().subscribe(data=>this.orders=data);
  }
  getInfo()
  {
    this.info=this.authService.getAccount()
  
  }
  Logout()
  {
    this.authService.setLogout();
    this.route.navigate(['/login']);
  }

}
