import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question } from "./model/question.model";
import { ApiService } from "./services/api.service";
import { QuestionComponent } from "./question/question.component";
import { ClarityIcons, codeIcon } from "@cds/core/icon";
import { ClrLayoutModule } from "@clr/angular";
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ClrLayoutModule, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public category: string = 'linux';
  public difficulty: string = 'easy';
  public questions: Question[] = [];

  constructor(private questionService: ApiService) {
    ClarityIcons.addIcons(codeIcon);
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions(this.category, this.difficulty).then((data: any) => {
      this.questions = data;
      console.log(this.questions);
    })
  }
}
