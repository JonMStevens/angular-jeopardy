import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from './category';
import { Clue } from './clue';
import { GameStateService } from './game-state.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryGetterService {
  private readonly USE_FAKE_CATEGORY = true;
  private readonly FAKE_CATEGORY_JS =
    '{"id": 55,"title": "sport <i>of</i> kings","clues_count": 25,"clues": [{"id": 303,"answer": "bet on horses","question": "The <i>pari-mutuel</i> system lets you do it legally","value": 100,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 309,"answer": "a handicap","question": "Race where faster horses carry more weight than slower ones","value": 200,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 315,"answer": "a mudder","question": "Race horse that runs well on a wet track, or a Bronx mommy","value": 300,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 327,"answer": "J. Paul Getty","question": "Question was missing!","value": null,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": null},{"id": 321,"answer": "Adam Clayton Powell","question": "Lorem ipsum dolor sit amet consectetur adipiscing elit, luctus quis varius blandit turpis. Interdum vivamus lectus blandit tristique at curabitur diam sagittis volutpat nibh habitasse litora, platea suspendisse tempus augue felis dapibus curae aliquet urna mus feugiat. Etiam eros sed vehicu","value": null,"airdate": "1984-11-29T12:00:00.000Z","category_id": 55,"game_id": null,"invalid_count": 1}]}';

  private readonly CORYAT_CATEGORY: Category = {
    id: 0,
    title: 'coryat score counter',
    clues: [
      {
        id: 0,
        answer: '',
        question: '',
        question_number: 1,
        airdate: null,
        game_id: null
      },
      {
        id: 0,
        answer: '',
        question: '',
        question_number: 2,
        airdate: null,
        game_id: null
      },
      {
        id: 0,
        answer: '',
        question: '',
        question_number: 3,
        airdate: null,
        game_id: null
      },
      {
        id: 0,
        answer: '',
        question: '',
        question_number: 4,
        airdate: null,
        game_id: null
      },
      {
        id: 0,
        answer: '',
        question: '',
        question_number: 5,
        airdate: null,
        game_id: null
      }
    ],
    clues_count: 5
  };

  public readonly errorClue: Clue = {
    id: 0,
    answer: 'error',
    question: 'error',
    question_number: 0,
    airdate: null,
    game_id: null
  };
  public readonly errorCategory: Category = {
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
  constructor(private http: HttpClient, private gameState: GameStateService) {}

  public getCategory$(): Observable<Category> {
    if (this.gameState.inCoryatMode) {
      return this.getCoryatCategory$();
    }
    /* for testing so I do not send pointless requests to the actual server */
    if (this.USE_FAKE_CATEGORY) {
      return this.getFakeCategory$();
    }

    // todo figure out how many categories are available and set limit at that id
    const requestUrl = `https://jservice.io/api/category?id=${
      1 + this.randomInt(18418)
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
    const fixedClues: Clue[] = [];

    const categoryStartingClueIndex = this.getRandomCategoryStartingClueIndex(
      category.clues.length
    );
    category.clues = category.clues.slice(
      categoryStartingClueIndex,
      categoryStartingClueIndex + 5
    );

    for (let index = 0; index < category.clues.length; index++) {
      const clue = category.clues[index];

      if (!clue.question) {
        /* todo: report this question to the service */
        clue.question = '*Error*: Clue was a video/audio/picture question';
      }

      fixedClues.push({
        id: clue.id,
        answer: clue.answer.replace('\\', ''),
        question: clue.question.replace('\\', ''),
        question_number: (index % 5) + 1,
        airdate: clue.airdate,
        game_id: clue.game_id
      });
    }
    category.clues = fixedClues;
    return category;
  }

  private randomInt(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  /** Get the index of a clue that started a category */
  private getRandomCategoryStartingClueIndex(clueCount: number): number {
    /* Returns the index of a clue that started a category.
            Since some categories get reused a category may have more than 5 clues in it.
            I am assuming they will be added 5 at a time.
            A category starting clue should then be at an index divisible by 5. */
    const gameCount = clueCount / 5;
    return 5 * this.randomInt(gameCount);
  }
  private getFakeCategory$(): Observable<Category> {
    const category: Category = JSON.parse(this.FAKE_CATEGORY_JS);
    this.fixClues(category);
    return of(category);
  }
  private getCoryatCategory$(): Observable<Category> {
    return of(this.CORYAT_CATEGORY);
  }
}
