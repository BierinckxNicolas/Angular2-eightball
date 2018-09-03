import { Component, Output, EventEmitter,OnInit } from '@angular/core';

import { EightballService } from './eightball.service';
import { Eightball } from './eightball';
import { Question } from './question';

@Component({
   selector: 'eightball',
   templateUrl: './eightball.component.html'
})

export class EightballComponent  {
  

    question:Question;
    eightball:Eightball;
    answers :string[] = [
         'It is certain.',
          'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
         'Signs point to yes.',
         'Reply hazy, try again',
         'Better not tell you now.',
         'Cannot predict now.',
         'Concentrate and ask again.',
         'Dont count on it.',
         ' My reply is no.',
         'My sources say no',
         'Outlook not so good.',
         'Very doubtful.'];


   constructor(private eightballService: EightballService) {}

  /* ngOnInitt(): void {
        this.eightballService.getAllPosts().subscribe(data => this.posts = data);
   }*/

   getQuestion(question: string): void {
        this.eightballService.getQuestion().subscribe(data => this.printRandomAnswer(data.question));
         //this.commentsFound.emit(this.comments))
   }


   printRandomAnswer(question :string)  {
       this.eightball.answer = "";
       for (var key in localStorage){
        if(question == key) {
            this.eightball.answer = localStorage.getItem(key);
        }
        else {
            this.eightball.answer = this.answers[Math.floor(Math.random() * this.answers.length)];
        }

     }

     console.log(this.eightball.answer)

   }


   }







