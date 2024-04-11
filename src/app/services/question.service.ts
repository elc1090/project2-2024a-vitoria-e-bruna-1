import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Question } from "../model/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'https://quizapi.io/api/v1';
  private apiKey = 'dHcXKcVlv2wWXiMxg4FE1XGUVyY8oTZwtbPk1xJM'

  constructor(private http: HttpClient) {
  }

  getQuestions(category: string, difficulty: string): Observable<Question[]> {
    let categoryParam = `&category=${category}`
    let difficultyParam = `&difficulty=${difficulty}`
    return this.http.get<Question[]>(`${this.apiUrl}/questions?apiKey=${this.apiKey}${categoryParam}${difficultyParam}`);
  }
}
