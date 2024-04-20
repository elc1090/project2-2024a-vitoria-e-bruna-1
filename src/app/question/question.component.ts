import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../model/question.model";
import {KeyValuePipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatSelect} from "@angular/material/select";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    KeyValuePipe,
    MatOption,
    MatSelect,
    MatFormFieldModule,
    MatInputModule,
    MatFormField,
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    ReactiveFormsModule,
    MatCheckbox,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatProgressBar,
    MatButton,
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

  constructor() {
    this.loading = false;
  }

  ngAfterViewInit() {
    console.log(this.question)
    // @ts-ignore
    this.multiple = this.question.multiple_correct_answers;
  }

  submit() {
    this.submitted = true;
    console.log(this.selections)
  }
}
