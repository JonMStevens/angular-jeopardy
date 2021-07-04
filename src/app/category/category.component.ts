import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryGetterService } from '../category-getter.service';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category | null = null;
  constructor(
    private categoryGetterService: CategoryGetterService,
    private gameState: GameStateService
  ) {}

  ngOnInit(): void {
    this.fillCategory();
    this.gameState.roundChange$.subscribe(() => {
      this.fillCategory();
    });
  }

  fillCategory(): void {
    this.categoryGetterService
      .getCategory$()
      .subscribe((category) => (this.category = category));
  }
}
