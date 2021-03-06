// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuotes = new Quotes ("","","",new Date(),0,0);
    @Output() addQuotes = new EventEmitter < Quotes > ();

    // function that creates a new quote array

    submittingQuote(){

        this.addQuotes.emit(this.newQuotes);
        this.newQuotes = new Quotes("","","",new Date(),0,0)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
