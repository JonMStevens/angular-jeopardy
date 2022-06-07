import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
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
export class CategoryComponent implements OnInit, OnDestroy {
  public category: Category | undefined;
  public categorySubscription: Subscription | undefined;
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

  ngOnDestroy(): void {
    this.gameState.roundChange$.unsubscribe();
    this.categorySubscription?.unsubscribe();
  }

  fillCategory(): void {
    if (this.getCategoryFromSession()) return;

    this.categorySubscription = this.categoryGetterService
      .getCategory$()
      .subscribe((category) => {
        this.category = category;
        this.saveCategoryToSession();
      });
  }

  getCategoryFromSession(): boolean {
    try {
      const sessionVar: Category = JSON.parse(
        String(sessionStorage.getItem(this.sessionStorageKey))
      );
      if (!sessionVar) return false;
      this.category = sessionVar;
    } catch (error) {
      this.gameState.reset();
      return false;
    }
    return true;
  }

  saveCategoryToSession(): void {
    sessionStorage.setItem(
      this.sessionStorageKey,
      JSON.stringify(this.category)
    );
  }

  onClueClick(): void {
    this.saveCategoryToSession();
  }
  isErrorCategory = (): boolean =>
    this.category === this.categoryGetterService.errorCategory;
}
