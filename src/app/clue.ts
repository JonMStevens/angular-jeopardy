export interface Clue {
  id: number;
  answer: string;
  question: string;
  question_number: number;
  airdate: Date | null;
  game_id: number | null;
  clicked: boolean | null;
}
