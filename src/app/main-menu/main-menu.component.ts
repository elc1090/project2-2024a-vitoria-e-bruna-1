import {Component, EventEmitter, Output} from '@angular/core';
import { ApiService } from "../services/api.service";
import {ClrAlertModule, ClrSpinnerModule} from "@clr/angular";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
  @Output() dataChange = new EventEmitter<{difficulty: string, category: string}>();

  public categories: string[] = [];
  public loading = false;
  public error = false;
  public message = '';
  public difficulty = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.loading = true;
    this.apiService.getCategories().subscribe(data => {
      this.loading = false;
      this.categories = data.map(category => category.name);
    }, (error) => {
      this.loading = false;
      this.error = true;
      this.message = 'Failed to load categories';
    });
  }

  send(category: string) {
    if (this.difficulty === '') {
      this.error = true;
      this.message = 'Please select a difficulty';
      // return;
    } else {
      this.dataChange.emit({difficulty: this.difficulty, category: category});
    }
  }
}
