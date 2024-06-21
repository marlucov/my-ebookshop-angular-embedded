import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryName!: string;
  allCategories!: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((allCategories: Category[]) => {
      this.allCategories = allCategories;
    });
  }

  getCategory(eventTarget: EventTarget | null) {
    (null === eventTarget) ?
      (this.categoryName = '') :
      (
        ('' === (eventTarget as HTMLSelectElement).value) ?
          (this.categoryName = '') :
          (this.categoryName = (eventTarget as HTMLSelectElement).selectedOptions[0].text)
      );
  }
}
