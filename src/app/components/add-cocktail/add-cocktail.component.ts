import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../Cocktail';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-cocktail',
  templateUrl: './add-cocktail.component.html',
  styleUrls: ['./add-cocktail.component.css'],
})
export class AddCocktailComponent implements OnInit {
  faXmark = faXmark;
  name!: string;
  author!: string;
  ingredients!: string[];
  description!: string;
  image!: string;
  tags: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addTag(e: any) {
    if (e.key == 'Enter') {
      let tag: string = e.target.value.replace(/\s+/g, ' ');
      if (tag.length > 1 && !this.tags.includes(tag))
        tag.split(',').forEach((tag) => {
          this.tags.push(tag);
          console.log(this.tags);
        });
    } else return;
    e.target.value = '';
  }

  remove(tag: string) {
    let index = this.tags.indexOf(tag);
    this.tags = [...this.tags.slice(0, index), ...this.tags.slice(index + 1)];
    console.log(this.tags);
  }

  removeAll() {
    this.tags.length = 0;
    const ingredientTags = document.querySelectorAll('.ingredient-tags');
    ingredientTags.forEach((ingredientTags) => ingredientTags.remove());
    console.log(this.tags);
  }
}
