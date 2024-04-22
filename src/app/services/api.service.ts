import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Question } from "../model/question.model";
import { QuizConfig } from "../model/quiz-config.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://quizapi.io/api/v1';
  private apiKey = 'dHcXKcVlv2wWXiMxg4FE1XGUVyY8oTZwtbPk1xJM'

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<{ name: string }[]> {
    return this.http.get<{ name: string }[]>(`${this.apiUrl}/categories?apiKey=${this.apiKey}`);
  }

  getQuestions(quizConfig: QuizConfig): Observable<Question[]> {
    let categoryParam = `&category=${quizConfig.category}`
    let difficultyParam = `&difficulty=${quizConfig.difficulty}`
    return this.http.get<Question[]>(`${this.apiUrl}/questions?apiKey=${this.apiKey}${categoryParam}${difficultyParam}&limit=20`);
  }
}
