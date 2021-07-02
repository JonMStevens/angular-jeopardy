export interface Clue {
    id: number,
    answer: string,
    question: string,
    value: number,
    airdate: Date,
    category_id: number,
    game_id: number
}