import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../Cocktail';

@Component({
  selector: 'app-add-cocktail',
  templateUrl: './add-cocktail.component.html',
  styleUrls: ['./add-cocktail.component.css'],
})
export class AddCocktailComponent implements OnInit {
  name!: string;
  author!: string;
  ingredients!: string[];
  description!: string;
  image!: string;

  constructor() {}

  ngOnInit(): void {}
}
