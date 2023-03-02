import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>) {}

  storeRecipes() {
    // get my recipe list from recipe service
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-94c7b-default-rtdb.firebaseio.com/recipe.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  // use 'put' to store more than one recipe and to overwrite any previous recipe stored
  // this is an end point given by firebase.

  fetchRecipes() {
      return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-94c7b-default-rtdb.firebaseio.com/recipe.json',
      ).pipe(map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipes => {
          // this.recipeService.setRecipes(recipes);
          this.store.dispatch(new RecipesActions.SetRecipes(recipes));
        }))
    }
  }
