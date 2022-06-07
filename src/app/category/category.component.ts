import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../category';
import { CategoryGetterService } from '../category-getter.service';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  /*  could have blocks such as <i>
      with view encapsulation you cannot write rules for those blocks in css */
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  public category$: Observable<Category> | undefined;
  private sessionStorageKey = '';
  @Input() categoryNum: number | null = null;
  constructor(
    private categoryGetterService: CategoryGetterService,
    private gameState: GameStateService
  ) {}

  ngOnInit(): void {
    this.sessionStorageKey = `gs_category${this.categoryNum}`;
    this.fillCategory();
    this.gameState.roundChange$.subscribe(() => {
      sessionStorage.removeItem(this.sessionStorageKey);
      this.fillCategory();
    });
  }

  fillCategory(): void {
    if (this.getCategoryFromSession()) return;

    this.category$ = this.categoryGetterService
      .getCategory$()
      .pipe(tap((category) => this.saveCategoryToSession(category)));
  }

  getCategoryFromSession(): boolean {
    try {
      const sessionVar: Category = JSON.parse(
        String(sessionStorage.getItem(this.sessionStorageKey))
      );
      if (!sessionVar) return false;
      this.category$ = of(sessionVar);
    } catch (error) {
      this.gameState.reset();
      return false;
    }
    return true;
  }

  saveCategoryToSession(category: Category): void {
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(category));
  }

  onClueClick(category: Category): void {
    this.saveCategoryToSession(category);
  }
  isErrorCategory = (category: Category): boolean =>
    category === this.categoryGetterService.errorCategory;
}
