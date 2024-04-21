import { Component } from '@angular/core';
import { QuestionComponent } from "../question/question.component";
import { ApiService } from "../services/api.service";
import { Question } from "../model/question.model";
import { Utils } from "../utils";
import { QuizConfig } from "../model/quiz-config.model";
import { Router } from "@angular/router";
import { ClrAlertModule, ClrProgressBarModule, ClrSpinnerModule } from "@clr/angular";
import { ResultComponent } from "../result/result.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    QuestionComponent,
    ClrSpinnerModule,
    ClrAlertModule,
    ResultComponent,
    ClrProgressBarModule
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public quizConfig: QuizConfig;
  public questions: Question[] = [];
  public questionIndex = 0;

  public correctAnswersCount = 0;
  public wrongAnswersCount = 0;

  public loading = true;
  public hasError = false;
  public errorMessage = '';

  constructor(private apiService: ApiService, private router: Router) {
    // @ts-ignore
    this.quizConfig = this.router.getCurrentNavigation()?.extras.state;
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
        },
        error: err => {
          this.loading = false;
          this.hasError = true;
          this.errorMessage = 'Failed to load questions';
        }
      }
    );
  }

  nextQuestion(isCorrect: boolean) {
    if (isCorrect) {
      this.correctAnswersCount++;
    } else {
      this.wrongAnswersCount++;
    }
    this.questionIndex++;
  }
}
