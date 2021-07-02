import { Component, OnInit } from '@angular/core';
import { CategoryGetterService } from '../category-getter.service';
import { Category } from '../category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category | undefined = undefined;
  constructor(private categoryGetterService: CategoryGetterService) { }

  ngOnInit(): void {
    this.category = this.categoryGetterService.getCategory();
  }

}
