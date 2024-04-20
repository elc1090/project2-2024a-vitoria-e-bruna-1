import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question } from "./model/question.model";
import { ApiService } from "./services/api.service";
import { QuestionComponent } from "./question/question.component";
import { ClarityIcons, codeIcon } from "@cds/core/icon";
import {ClrAlertModule, ClrLayoutModule, ClrSpinnerModule} from "@clr/angular";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ClrLayoutModule, MainMenuComponent, ClrSpinnerModule, NgIf, ClrAlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public questions: Question[] = [];
  public loading = false;
  public error = false;
  public message = '';

  constructor(private questionService: ApiService) {
    ClarityIcons.addIcons(codeIcon);
  }

  getQuestions(category: string, difficulty: string) {
    this.loading = true;
    this.questionService.getQuestions(category, difficulty).subscribe((data: any) => {
      this.loading = false;
      this.questions = data;
      console.log(this.questions);
    }, (error) => {
      this.loading = false;
      this.error = true;
      this.message = 'Failed to load questions';
    });
  }

  onDataChange(data: {difficulty: string, category: string}) {
    // Use the data here
    console.log("app.component", data);
    this.getQuestions(data.category, data.difficulty);
  }
}
