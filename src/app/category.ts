import { Clue } from './clue';
export interface Category {
  id: number;
  title: string;
  clues_count: number;
  clues: Clue[];
}
