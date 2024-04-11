export class Question {
  id: number;
  question: string;
  answers: Map<string, string>;
  multiple_correct_answers: boolean;
  correct_answers: Map<string, boolean>;
  correct_answer: string;


  constructor(id: number, question: string, answers: Map<string, string>, multiple_correct_answers: boolean, correct_answers: Map<string, boolean>, correct_answer: string) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.multiple_correct_answers = multiple_correct_answers;
    this.correct_answers = correct_answers;
    this.correct_answer = correct_answer;
  }
}
