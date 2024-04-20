import { Component } from '@angular/core';
import { QuestionComponent } from "../question/question.component";
import { ApiService } from "../services/api.service";
import { Question } from "../model/question.model";
import { Utils } from "../utils";
import { QuizConfig } from "../model/quiz-config.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    QuestionComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public quizConfig: QuizConfig;
  public questions: Question[] = [];
  public questionIndex = 0;

  public loading = false;
  public error = false;
  public message = '';

  constructor(private apiService: ApiService, private router: Router) {
    // @ts-ignore
    this.quizConfig = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.router.getCurrentNavigation()?.extras)
    console.log(this.quizConfig)
  }

  ngOnInit() {
    this.getQuestions(this.quizConfig)
  }

  getQuestions(quizConfig: QuizConfig) {
    this.loading = true;
    this.apiService.getQuestions(quizConfig).subscribe({
        next: data => {
          this.loading = false;
          this.questions = data.map(question => Utils.questionConverter(question));
          console.log(this.questions);
        },
        error: err => {
          this.loading = false;
          this.error = true;
          this.message = 'Failed to load questions';
        }
      }
    );
  }
}
