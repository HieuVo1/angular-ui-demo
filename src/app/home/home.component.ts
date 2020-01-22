import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public status=false;
  constructor() { }

  ngOnInit() {
  }
  statusNext(){
    console.log(this.status);
  }
  statusPrev(){
    console.log(1);
  }
}
