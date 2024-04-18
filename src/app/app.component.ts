import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question } from "./model/question.model";
import { apiService } from "./services/api.service";
import {QuestionComponent} from "./question/question.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';

  public category: string = 'linux';
  public difficulty: string = 'easy';
  public questions: Question[] = [];

  constructor(private questionService: apiService) {

    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions(this.category, this.difficulty).then((data: any) => {
      this.questions = data;
      console.log(this.questions);
    })
  }
}
