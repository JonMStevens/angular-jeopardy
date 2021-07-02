import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clue } from './clue'
import { Category } from './category'
@Injectable({
  providedIn: 'root'
})
export class CategoryGetterService {
  fakeCategoryJS: string = '{"id": 55,"title": "sport of kings","clues_count": 25,"clues": [{"id": 303,"answer": "bet on horses","question": "The pari-mutuel system lets you do it legally","value": 100,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 309,"answer": "a handicap","question": "Race where faster horses carry more weight than slower ones","value": 200,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 315,"answer": "a mudder","question": "Race horse that runs well on a wet track, or a Bronx mommy","value": 300,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 327,"answer": "J. Paul Getty","question": "","value": null,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 321,"answer": "Adam Clayton Powell","question": "","value": null,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": 1}]}';
  
  constructor() { }

  getCategory(): Category {
    var category: Category = JSON.parse(this.fakeCategoryJS);
    return category;
  }
}
