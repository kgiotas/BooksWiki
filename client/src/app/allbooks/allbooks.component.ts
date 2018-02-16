import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book';
import { Allbooks } from '../types/allbooks';
import { BookService } from '../book.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  allbooks: Allbooks;
  pages: string[];
  page:number;

  constructor(private bookService: BookService,private route: ActivatedRoute,private routerr: Router,
  private sanitizer: DomSanitizer) {
  }
  ngOnInit() {
     this.getBooks('1');
     this.page = 1;
   }

   getUrl(id = '1'){
     return this.sanitizer.bypassSecurityTrustUrl("http://localhost:4200/book/" + id);
   }
  getBooks(page='1'): void {

    this.bookService.getBooks(page)
      .subscribe(allbooks => {
        this.allbooks = allbooks;
        this.pages = this.pagination(page, this.allbooks.total_pages);
      }
      );
    }
    goto(paje='1'): void{
        this.getBooks(paje);
    }
    //Creates pages array for easy navigation
    //found at https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
    pagination(c, m) : Array<string>{
        var current = c,
            last = m,
            delta = 2,
            left = current - delta,
            right = current + delta + 1,
            range = [],
            rangeWithDots = [],
            l;

        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
      }

}
