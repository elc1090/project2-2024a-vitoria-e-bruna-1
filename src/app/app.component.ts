import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from "./services/api.service";
import { QuestionComponent } from "./question/question.component";
import { ClarityIcons, codeIcon } from "@cds/core/icon";
import {ClrAlertModule, ClrLayoutModule, ClrSpinnerModule} from "@clr/angular";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import {NgIf} from "@angular/common";
import { QuizComponent } from "./quiz/quiz.component";
import { QuizConfig } from "./model/quiz-config.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ClrLayoutModule, MainMenuComponent, ClrSpinnerModule, NgIf, ClrAlertModule, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public loading = false;

  constructor(private questionService: ApiService) {
    ClarityIcons.addIcons(codeIcon);
  }

  onDataChange(data: QuizConfig) {
    // Use the data here
    console.log("app.component", data);
    // this.getQuestions(data.category, data.difficulty);
  }
}
