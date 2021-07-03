import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryGetterService } from '../category-getter.service';
import { Category } from '../category';
import { Clue } from '../clue';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category | undefined = undefined;
  @Output() public clueClicked = new EventEmitter<Clue>();
  constructor(private categoryGetterService: CategoryGetterService) { }

  ngOnInit(): void {
    this.categoryGetterService.getCategory().subscribe(category => this.category = category);
  }

  onClueClick(clue: Clue): void {
    this.clueClicked.emit(clue);
  }
}
