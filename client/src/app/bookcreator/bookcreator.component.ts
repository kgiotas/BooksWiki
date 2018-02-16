import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookcreator',
  templateUrl: './bookcreator.component.html',
  styleUrls: ['./bookcreator.component.css']
})
export class BookcreatorComponent implements OnInit {


  // gets csrf token in order to post.
  getCookie(name: string): string {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
  }

  csrfcookie :string;

  constructor() { this.csrfcookie = this.getCookie("csrftoken");}
  ngOnInit() {
  }

}
