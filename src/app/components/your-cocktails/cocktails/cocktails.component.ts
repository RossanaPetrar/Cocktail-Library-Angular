import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Cocktail } from '../../../Cocktail';
import { CocktailServerService } from '../../../services/cocktail-server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CocktailModalComponent } from '../cocktail-modal/cocktail-modal.component';
import { catchError, NEVER, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
})
export class CocktailsComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  cocktails: Cocktail[] = [];
  name!: string;
  constructor(
    private cocktailServerService: CocktailServerService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.cocktailServerService
      .getCocktails()
      .subscribe((cocktails) => (this.cocktails = cocktails));
  }

  // filter: 'all' | 'active' | 'alcohol' = 'all';

  // filterCocktails() {
  //   if (this.filter === 'all') {
  //     return this.cocktailServerService
  //       .getCocktails()
  //       .subscribe((cocktails) => (this.cocktails = cocktails));
  //   }
  //   return this.cocktailServerService
  //     .getCocktails()
  //     .pipe(
  //       tap((cocktail) =>
  //         this.filter === 'alcohol' ? cocktail.alcohol : !cocktail.alcohol
  //       )
  //     );
  // }

  deleteCocktail(cocktail: Cocktail) {
    this.cocktailServerService
      .deleteCocktail(cocktail)
      .subscribe(
        () =>
          (this.cocktails = this.cocktails.filter((c) => c.id !== cocktail.id))
      );
  }

  showEditCocktail(cocktail: Cocktail) {
    const modalRef = this.modalService.open(CocktailModalComponent);
    modalRef.componentInstance.clonedCocktail = {
      ...cocktail,
    };

    modalRef.closed
      .pipe(
        switchMap((updatedCocktail) => {
          return this.cocktailServerService.updateCocktail(updatedCocktail);
        }),
        tap((updatedCocktail) => {
          this.cocktails = this.cocktails.map((c) => {
            if (c.id === updatedCocktail.id) {
              return updatedCocktail;
            }
            return c;
          });
        }),
        catchError((err) => {
          alert(err);
          return NEVER;
        })
      )
      .subscribe();
  }

  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.cocktails = this.cocktails.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
}
