import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Cocktail } from '../../../Cocktail';
import { CocktailServerService } from '../../../services/cocktail-server.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
})
export class CocktailsComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  cocktails: Cocktail[] = [];
  constructor(private cocktailServerService: CocktailServerService) {}

  ngOnInit(): void {
    this.cocktailServerService
      .getCocktails()
      .subscribe((cocktails) => (this.cocktails = cocktails));
  }

  deleteCocktail(cocktail: Cocktail) {
    this.cocktailServerService
      .deleteCocktail(cocktail)
      .subscribe(
        () =>
          (this.cocktails = this.cocktails.filter((c) => c.id !== cocktail.id))
      );
  }
}
