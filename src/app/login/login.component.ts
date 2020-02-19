import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../authservice.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthserviceService) { }

  ngOnInit() {
  }
  onSubmit(value)
  {
    this.authService.getUserDetail(value.email,value.password);
  }
}
