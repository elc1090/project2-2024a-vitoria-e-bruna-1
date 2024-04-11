import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question } from "./model/question.model";
import { QuestionService } from "./services/question.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';
  questions: Question[] = [];

  constructor(private questionService: QuestionService) {
    this.getQuestions();
  }

  //TODO: place function on the right file
  getQuestions() {
    //TODO: get category and difficulty dynamically
    this.questionService.getQuestions("linux", "Easy").subscribe(data => {
      this.questions = data;
      //TODO: remove console.log()
      console.log(this.questions);
    })
  }
}
