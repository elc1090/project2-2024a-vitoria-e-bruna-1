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
  @Output() onNextQuestion = new EventEmitter<boolean>();

  public selections = [];
  public multiple = false;
  public submitted = false;

  public selected = "";

  ngOnChanges() {
    this.multiple = this.question.multiple_correct_answers;
    this.submitted = false;
    this.selected = "";
  }

  submitAnswer(selectedAnswer: string) {
    this.selected = selectedAnswer;
    this.submitted = true;
  }

  nextQuestion() {
    let isCorrect = this.selected === this.question.correct_answer;
    this.onNextQuestion.emit(isCorrect);
  }

}
