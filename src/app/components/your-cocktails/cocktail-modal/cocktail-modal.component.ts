import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cocktail } from '../../../Cocktail';

@Component({
  selector: 'app-cocktail-modal',
  templateUrl: './cocktail-modal.component.html',
  styleUrls: ['./cocktail-modal.component.css'],
})
export class CocktailModalComponent implements OnInit {
  @Input() clonedCocktail!: Cocktail;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
