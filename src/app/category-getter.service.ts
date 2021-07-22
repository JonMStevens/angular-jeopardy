import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from './category';
import { Clue } from './clue';
@Injectable({
  providedIn: 'root'
})
export class CategoryGetterService {
  private readonly USE_FAKE_CATEGORY = false;
  private readonly FAKE_CATEGORY_JS =
    '{"id": 55,"title": "sport <i>of</i> kings","clues_count": 25,"clues": [{"id": 303,"answer": "bet on horses","question": "The <i>pari-mutuel</i> system lets you do it legally","value": 100,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 309,"answer": "a handicap","question": "Race where faster horses carry more weight than slower ones","value": 200,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 315,"answer": "a mudder","question": "Race horse that runs well on a wet track, or a Bronx mommy","value": 300,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 327,"answer": "J. Paul Getty","question": "Question was missing!","value": null,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 321,"answer": "Adam Clayton Powell","question": "Question was missing!","value": null,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": 1}]}';

  private readonly errorClue: Clue = {
    id: 0,
    answer: 'error',
    question: 'error',
    question_number: 0,
    airdate: null,
    game_id: null
  };
  private readonly errorCategory: Category = {
    id: 0,
    title: 'error',
    clues: [
      this.errorClue,
      this.errorClue,
      this.errorClue,
      this.errorClue,
      this.errorClue
    ],
    clues_count: 0
  };
  constructor(private http: HttpClient) {}

  public getCategory$(): Observable<Category> {
    /* for testing so I do not send pointless requests to the actual server */
    if (this.USE_FAKE_CATEGORY) {
      return this.getFakeCategory$();
    }

    // todo figure out how many categories are available and set limit at that id
    const requestUrl = `https://jservice.io/api/category?id=${
      1 + this.randomInt(3000)
    }`;

    return this.http.get<Category>(requestUrl).pipe(
      map((cat: Category) => {
        this.fixClues(cat);
        return cat;
      }),
      catchError((error) => {
        // eslint-disable-next-line no-console
        console.error('Failed to get category');
        // eslint-disable-next-line no-console
        console.error(error);
        return of(this.errorCategory);
      })
    );
  }
  private fixClues(category: Category): Category {
    const clues: Clue[] = [];

    /* todo this should be a random 5 clues, not just the first 5 */
    category.clues = category.clues.slice(0, 5);

    for (let index = 0; index < category.clues.length; index++) {
      const clue = category.clues[index];
      clues.push({
        id: clue.id,
        answer: clue.answer,
        question: clue.question,
        question_number: (index % 5) + 1,
        airdate: clue.airdate,
        game_id: clue.game_id
      });
    }
    category.clues = clues;
    return category;
  }

  private randomInt(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  private getFakeCategory$(): Observable<Category> {
    const category: Category = JSON.parse(this.FAKE_CATEGORY_JS);
    this.fixClues(category);
    return of(category);
  }
}
