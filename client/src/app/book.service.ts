import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MessageService } from './message.service';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from './types/book';
import { Message } from './types/message';
import { Allbooks } from './types/allbooks';
import { Explaination } from './types/explaination';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

  private booksUrl = 'http://localhost:8000/api/books';
  private popularBooksUrl = 'http://localhost:8000/api/gpb';
  private lastmaxpages = 0;

  constructor(private http: HttpClient,
private messageService: MessageService) { }

/** GET books from the server */
getBooks(page='1'): Observable<Allbooks> {
  return this.http.get<Allbooks>(this.booksUrl + '?page=' + page)
   .pipe(
     tap(books => this.log(`fetched books`)),
     catchError(this.handleError('getBooks', []))
);
}

getBookDetails(bookid=1): Observable<Book> {
  var bookurl = 'http://localhost:8000/api/bookdetails/' + bookid;
  return this.http.get<Book>(bookurl)
   .pipe(
     tap(bookdets => this.log(`fetched book ` + bookid + ' details')),
     catchError(this.handleError('getBookDetails', []))
);
}

getBookExplainations(bookid=1): Observable<Explaination[]> {
  var bookurl = 'http://localhost:8000/api/bookexplainations/' + bookid;
  var response = this.http.get(bookurl);
  return response
   .pipe(
     tap(bookdets => this.log(`fetched explainations for ` + bookid + ' details')),
     catchError(this.handleError('getBookExplainations', []))
);
}

getlatestBooks(): Observable<Book[]>{
  return this.http.get<Book[]>(this.popularBooksUrl)
   .pipe(
     tap(books => this.log(`fetched latest books`)),
     catchError(this.handleError('getlatestBooks', []))
  );

}



  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
   private handleError<T> (operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {

       console.error(error); // log to console instead
       this.log(`${operation} failed: ${error.message}`);

       // Let the app keep running by returning an empty result.
       return of(result as T);
     };
   }

   private log(message: string): void {
     this.messageService.add('BookService: ' + message);
 }
}
