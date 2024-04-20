import { Routes } from '@angular/router';
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { QuizComponent } from "./quiz/quiz.component";

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'quiz', component: QuizComponent }
];
