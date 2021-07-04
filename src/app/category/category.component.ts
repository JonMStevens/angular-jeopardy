import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryGetterService } from '../category-getter.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category | null = null;
  constructor(private categoryGetterService: CategoryGetterService) {}

  ngOnInit(): void {
    this.categoryGetterService
      .getCategory()
      .subscribe((category) => (this.category = category));
  }
}
