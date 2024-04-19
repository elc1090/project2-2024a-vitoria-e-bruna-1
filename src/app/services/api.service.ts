import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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

  getQuestions(category: string, difficulty: string) {
    let categoryParam = `&category=${category}`;
    let difficultyParam = `&difficulty=${difficulty}`;
    return new Promise((resolve, reject) => {
      return this.http.get(`${this.apiUrl}/questions?apiKey=${this.apiKey}${categoryParam}${difficultyParam}`).subscribe((data: any) => {
        resolve(data);
      }, (error: any) => {
        reject(error);
      });
    });
  }
}
