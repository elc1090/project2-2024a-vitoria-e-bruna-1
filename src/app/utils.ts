import { Question } from "./model/question.model";

export class Utils {
  static questionConverter(question: Question) {
    // @ts-ignore
    question.multiple_correct_answers = question.multiple_correct_answers == 'true';
    if (question.multiple_correct_answers) {
      return;
    }
    question.answers = new Map(Object.entries(question.answers));
    question.correct_answers = new Map(Object.entries(question.correct_answers));
    // @ts-ignore
    question.correct_answers.forEach((value, key) => question.correct_answers.set(key, value == 'true'))

    return question;
  }
}
