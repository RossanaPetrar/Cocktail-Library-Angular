import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cocktail } from '../../../Cocktail';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cocktail-modal',
  templateUrl: './cocktail-modal.component.html',
  styleUrls: ['./cocktail-modal.component.css'],
})
export class CocktailModalComponent implements OnInit {
  faXmark = faXmark;
  name!: string;
  author!: string;
  ingredients!: string[];
  description!: string;
  image!: string;
  alcohol!: boolean;
  @Input() clonedCocktail!: Cocktail;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  addTag(e: any) {
    if (e.key == 'Enter') {
      let tag: string = e.target.value.replace(/\s+/g, ' ');
      if (tag.length > 1 && !this.clonedCocktail.ingredients.includes(tag))
        tag.split(',').forEach((tag) => {
          this.clonedCocktail.ingredients.push(tag);
          console.log(this.clonedCocktail.ingredients);
        });
    } else return;
    e.target.value = '';
  }

  remove(tag: string) {
    let index = this.clonedCocktail.ingredients.indexOf(tag);
    this.clonedCocktail.ingredients = [
      ...this.clonedCocktail.ingredients.slice(0, index),
      ...this.clonedCocktail.ingredients.slice(index + 1),
    ];
    console.log(this.clonedCocktail.ingredients);
  }

  removeAll() {
    this.clonedCocktail.ingredients.length = 0;
    const ingredientTags = document.querySelectorAll('.ingredient-tags');
    ingredientTags.forEach((ingredientTags) => ingredientTags.remove());
    console.log(this.clonedCocktail.ingredients);
  }
}
