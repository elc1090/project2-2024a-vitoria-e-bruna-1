export class QuizConfig {
  difficulty: string;
  category: string;

  constructor(difficulty: string, category: string) {
    this.difficulty = difficulty;
    this.category = category;
  }
}
