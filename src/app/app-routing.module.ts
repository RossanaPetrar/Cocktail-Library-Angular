import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCocktailComponent } from './components/add-cocktail/add-cocktail.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CocktailsComponent } from './components/your-cocktails/cocktails/cocktails.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'your-cocktails', component: CocktailsComponent },
  { path: 'add-cocktail', component: AddCocktailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
