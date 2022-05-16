import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailServerService {
  private apiUrl = 'http://localhost:3000/cocktails';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl);
  }

  deleteCocktail(cocktail: Cocktail): Observable<Cocktail> {
    const url = `${this.apiUrl}/${cocktail.id}`;
    return this.http.delete<Cocktail>(url);
  }
}
