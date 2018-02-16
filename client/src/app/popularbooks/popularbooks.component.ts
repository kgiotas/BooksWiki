import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../types/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popularbooks',
  templateUrl: './popularbooks.component.html',
  styleUrls: ['./popularbooks.component.css']
})
export class PopularbooksComponent implements OnInit {
  books:Book[];

  constructor(private bookService: BookService, private routerr: Router) {
  }

  ngOnInit() {
    this.getlatestBooks();
  }
  getlatestBooks(): void {
    this.bookService.getlatestBooks()
      .subscribe(books => {
        this.books = books;
      }
      );
    }

}
