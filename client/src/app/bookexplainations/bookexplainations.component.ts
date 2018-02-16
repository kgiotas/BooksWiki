import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book';
import { Message } from '../types/message';
import { Explaination } from '../types/explaination';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bookexplainations',
  templateUrl: './bookexplainations.component.html',
  styleUrls: ['./bookexplainations.component.css']
})
export class BookexplainationsComponent implements OnInit {

  book : Book;
  explainations: Explaination[];
  message: Message;
  middlepage: number;
  maxpages: number;
  pages: string[];
  username: string;

  // get csrf token
  getCookie(name: string): string {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
  }

  csrfcookie :string;
  constructor(private auth: AuthService, private bookService: BookService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private routerr: Router,private sharedService: SharedService
  ) {this.csrfcookie = this.getCookie("csrftoken"); }

  //get book details + all explainations
  ngOnInit() {
    this.getBookDetails(this.route.snapshot.paramMap.get('id'));
        this.getBookExplainations(this.route.snapshot.paramMap.get('id'));
  }

//talks to the book service to get all book explainations
getBookExplainations(bookid): void {
  this.bookService.getBookExplainations(bookid)
    .subscribe(explainations => {
      this.explainations = explainations;
    }
    );
  }

  //talks to the book service to get details.
  getBookDetails(bookid): void {
    this.bookService.getBookDetails(bookid)
      .subscribe(book => {
        this.book = book;
      }
      );
    }

    //sanitizes url!
    getUrl(book_id = '1', page = 1){
      return this.sanitizer.bypassSecurityTrustUrl("book/"+book_id+"/" + page + "/");
    }

}
