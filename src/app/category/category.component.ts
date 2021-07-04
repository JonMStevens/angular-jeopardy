import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { CategoryGetterService } from '../category-getter.service';
import { Clue } from '../clue';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category: Category | null = null;
  @Output() public clueClick = new EventEmitter<Clue>();
  constructor(private categoryGetterService: CategoryGetterService) {}

  ngOnInit(): void {
    this.categoryGetterService
      .getCategory()
      .subscribe((category) => (this.category = category));
  }

  onClueClick(clue: Clue): void {
    this.clueClick.emit(clue);
  }
}
