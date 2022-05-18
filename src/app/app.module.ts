import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CocktailsComponent } from './components/your-cocktails/cocktails/cocktails.component';
import { AddCocktailComponent } from './components/add-cocktail/add-cocktail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CocktailCardComponent } from './components/your-cocktails/cocktail-card/cocktail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CocktailsComponent,
    AddCocktailComponent,
    PageNotFoundComponent,
    CocktailCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
