import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from "../services/api.service";
import { ClrAlertModule, ClrSpinnerModule } from "@clr/angular";
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { QuizConfig } from "../model/quiz-config.model";

@Component({
  selector: 'app-main-menu',
  standalone: true,
  templateUrl: './main-menu.component.html',
  imports: [
    ClrSpinnerModule,
    NgIf,
    ClrAlertModule,
    FormsModule
  ],
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  @Output() dataChange = new EventEmitter<QuizConfig>();

  public categories: string[] = [];
  public loading = false;
  public hasError = false;
  public errorMessage = '';
  public difficulty = '';

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.loading = true;
    this.apiService.getCategories().subscribe({
      next: data => {
        this.loading = false;
        this.categories = data.map(category => category.name);
      },
      error: error => {
        this.loading = false;
        this.hasError = true;
        this.errorMessage = 'Failed to load categories';
      }
    });
  }

  send(category: string) {
    if (this.difficulty === '') {
      this.hasError = true;
      this.errorMessage = 'Please select a difficulty';
    } else {
      let quizConfig = new QuizConfig(this.difficulty, category);
      this.router.navigate(['/quiz'], {state: quizConfig})
    }
  }
}
