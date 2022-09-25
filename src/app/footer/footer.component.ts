import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "amanpratapsingh952@gmail.com";
  userName = "aman4680";
  
  constructor() { }

  ngOnInit(): void {
  }

}
