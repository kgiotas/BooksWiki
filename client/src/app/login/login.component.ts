import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../errorhandling.service';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  message: string;
  shareduser:{
    username: string;
  }
  constructor(
  private auth: AuthService,
  private eh: ErrorHandlingService,
  private router: Router,
private sharedService: SharedService) { }

  login(username, password) {
    this.auth.login(username, password)
        .subscribe(res => {
          if (res) {
            this.router.navigate(['/main']);
          }
      });
  }

  logout() {
    this.auth.logout();
  }

}
