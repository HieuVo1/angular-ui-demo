import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../authservice.service'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService:AuthserviceService) { }

  ngOnInit() {
  }
  onSubmit(value)
  {
    this.authService.create(value);
  }
}
