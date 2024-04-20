import { Component } from '@angular/core';
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-main-menu',
  standalone: true,
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  public categories: string[] = [];

  public selectedCategory: string = "";
  public selectedDifficulty: string = "";

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe(data => {
      this.categories = data.map(category => category.name);
    });
  }

  setDifficulty(difficulty: string) {
    this.selectedDifficulty = difficulty;
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
