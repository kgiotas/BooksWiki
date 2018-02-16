import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [ ]
})
export class AppComponent {
  title = 'BooksWiki';

    constructor(private auth: AuthService, private router: Router) {}

    goToHome(){
      this.router.navigate(['/main']);
    }

    logout(){
      this.auth.logout();
      this.router.navigate(['/main']);
    }
}
