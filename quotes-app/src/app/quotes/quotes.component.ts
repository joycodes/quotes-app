import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import { Quotes } from 'src/app/quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

   // Quotes Array
   quotes:Quotes[]=[
    new Quotes('Sometimes life is going to hit you in the head. Dont loose faith.','Steve Jobs','Joyce Nguttu', new Date(2022,1,23),2,1),
    new Quotes('The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Emma Amina',new Date(2022,1,30),4,3),
    new Quotes('Competitions are for horses not artists','Anonymous', 'Celestine Waigwa',new Date(2022,2,3),3,4),
    new Quotes('If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt', 'Tyler Karanja',new Date(2022,3,10),1,0),
    new Quotes('The way to get started is to quit talking and begin doing','Walt Disney','Rose Onyango',new Date(2022,3,19),9,2),
    new Quotes('Life is what happens when you are making other plans','John Lennon', 'Susan Maina',new Date(2022,4,6),1,0),
]

//function for ading a new quote
addNewQuote(quote) {
   
    this.quotes.push(quote)
  }

//function for toggling small text
toggleDetails(index) {
    
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }  

//function for deleting quote

deletingQuote(deleteQuote, index){
    if(deleteQuote){
        let toDelete =confirm("Are you sure you want to delete this quote?")

        if(toDelete){
            this.quotes.splice(index,1)
        }
    }
}

//function for getting the quote with the highest upvotes
// initialValue:number
// newValue:number
// counter:number

// highlightHighest(){

//    this.initialValue=0
//    this.newValue=0

//    for (this.counter=0; this.counter<this.quotes.length; this.counter++){
//        this.newValue =this.quotes[this.counter].upVote;

//        if(this.newValue > this.initialValue){
//            this.initialValue =this.newValue
//        }
//        return this.initialValue
//    }


// }

highlightHighest() {
    
    let quotesUpvote = []
    let highestUpVote: number
    for (let j = 0; j < this.quotes.length; j++) {
      quotesUpvote.push(this.quotes[j].upVote)
    }
    
        //The sort callback has to return

        // a negative number if a < b
        // 0 if a === b
        // a positive number if a > b

    quotesUpvote.sort(function (a, b) {
        //if b>a then b-a>0 and will return a positive number
      return b - a
    })
    highestUpVote = quotesUpvote[0]
    return highestUpVote;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
