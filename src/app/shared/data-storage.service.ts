import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})

export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

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
      this.http.get<Recipe[]>('https://ng-course-recipe-book-94c7b-default-rtdb.firebaseio.com/recipe.json')
      .subscribe( recipes => {
        this.recipeService.setRecipes(recipes);
        // Angular dont know which type recipes is, so we need to inform that into the get function
        // type <Recipe[]> is imported from recipe model
      })
    }
}
