import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../../Cocktail';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.css'],
})
export class CocktailCardComponent implements OnInit {
  @Input() cocktail!: Cocktail;
  @Output() onDeleteCocktail: EventEmitter<Cocktail> = new EventEmitter();
  @Output() edit: EventEmitter<Cocktail> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(cocktail: Cocktail) {
    this.onDeleteCocktail.emit(cocktail);
  }

  onEdit() {
    this.edit.emit(this.cocktail);
  }
}
