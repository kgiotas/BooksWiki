import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  getCookie(name: string): string {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
  }

  csrfcookie :string;
  constructor() {
  this.csrfcookie = this.getCookie("csrftoken");
}

  ngOnInit() {
  }
}
