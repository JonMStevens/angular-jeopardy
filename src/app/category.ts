import { Clue } from './clue'
export interface Category {
    id: Number,
    title: String,
    clues_count: Number,
    clues: Clue[]
}