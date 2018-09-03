import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Eightball } from './eightball';
import { Question } from './question';

@Injectable()
export class EightballService {


   private posts_url = 'http://localhost:4200/';

   constructor(private http: HttpClient) {}

   // get question
   getQuestion(): Observable<Question> {
      let url = `${this.posts_url}`;
      localStorage.setItem(JSON.stringify(Question), "test");
      return this.http.get<Question>(url);
   }

}
