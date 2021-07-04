import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { Clue } from './clue';
@Injectable({
  providedIn: 'root',
})
export class CategoryGetterService {
  fakeCategoryJS =
    '{"id": 55,"title": "sport of kings","clues_count": 25,"clues": [{"id": 303,"answer": "bet on horses","question": "The pari-mutuel system lets you do it legally","value": 100,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 309,"answer": "a handicap","question": "Race where faster horses carry more weight than slower ones","value": 200,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 315,"answer": "a mudder","question": "Race horse that runs well on a wet track, or a Bronx mommy","value": 300,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 327,"answer": "J. Paul Getty","question": "Question was missing!","value": null,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 321,"answer": "Adam Clayton Powell","question": "Question was missing!","value": null,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": 1}]}';

  constructor() {}

  getCategory$(): Observable<Category> {
    const category: Category = JSON.parse(this.fakeCategoryJS);
    const clues: Clue[] = [];
    for (let index = 0; index < category.clues.length; index++) {
      const clue = category.clues[index];
      clues.push({
        id: clue.id,
        answer: clue.answer,
        question: clue.question,
        question_number: (index % 5) + 1,
        value: clue.value,
        airdate: clue.airdate,
        game_id: clue.game_id,
      });
    }
    category.clues = clues;
    return of(category);
  }
}
