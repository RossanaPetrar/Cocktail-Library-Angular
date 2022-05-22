import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../Cocktail';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

  addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http.post<Cocktail>(this.apiUrl, cocktail);
  }

  updateCocktail(cocktail: Cocktail): Observable<Cocktail> {
    const url = `${this.apiUrl}/${cocktail.id}`;
    return this.http.patch<Cocktail>(url, cocktail, httpOptions);
  }
}
