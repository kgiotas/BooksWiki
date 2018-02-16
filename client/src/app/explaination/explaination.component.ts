import { Component, OnInit, Input } from '@angular/core';
import { Explaination } from '../types/explaination';
import { BookService } from '../book.service';

@Component({
  selector: 'app-explaination',
  templateUrl: './explaination.component.html',
  styleUrls: ['./explaination.component.css']
})
export class ExplainationComponent implements OnInit {

  @Input()
  explaination: Explaination;
  getCookie(name: string): string {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
  }

  csrfcookie :string;
  constructor(private bookService: BookService) { this.csrfcookie = this.getCookie("csrftoken");}

  ngOnInit() {
  }

  vote(explaination: Explaination, update: string){
    if(explaination.votetype == update){
      if(explaination.votetype == "up"){
        explaination.karma--;

      }else{
        explaination.karma++;
      }
      explaination.votetype = 'neut';
    }else{

      if(explaination.votetype == 'up' && update == 'down'){
        explaination.karma = explaination.karma - 2;
      }else if(explaination.votetype == 'down' && update == 'up'){
        explaination.karma = explaination.karma + 2;
      }else if(explaination.votetype == 'neut'){
        if(update == 'up'){
          explaination.karma++;
        }else{
          explaination.karma--;
        }
      }
      explaination.votetype = update;
    }
  }

}
