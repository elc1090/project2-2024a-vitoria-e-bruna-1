import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from "../model/question.model";
import { KeyValuePipe, NgForOf, NgIf, NgStyle } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    KeyValuePipe,
    FormsModule,
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question!: Question;

  public selections = [];
  public multiple = false;
  public loading = true;
  public submitted = false;
  @Output() dataChange = new EventEmitter<any>();

  public selected = "";

  constructor() {
    this.loading = false;
  }

  ngAfterViewInit() {
    console.log(this.question)
    this.multiple = this.question.multiple_correct_answers;
  }

  submitAnswer(selectedAnswer: string) {
    this.selected = selectedAnswer;
    this.submitted = true;
  }
}
