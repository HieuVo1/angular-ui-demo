import { Component, OnInit } from '@angular/core';
import { SendmailService } from '../sendmail.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor(private sentmail:SendmailService) { }
  ngOnInit() {
  }

  onSubmit(value)
  {
    this.sentmail.sentMail(value).subscribe(data=>console.log(data))
  }
}
