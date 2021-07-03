export interface Clue {
  id: number;
  answer: string;
  question: string;
  question_number: number;
  value: number | null;
  airdate: Date | null;
  game_id: number | null;
}
