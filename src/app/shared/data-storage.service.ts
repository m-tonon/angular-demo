import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

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
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-94c7b-default-rtdb.firebaseio.com/recipe.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
          // this map function is executed for every elem (recipe) in the array &
          // if ingredients = to recipe ingredients, than = to recipe.ingrediets, no change
          // if not, then set to an empty array.

          // first map is a rxjs operator and
          // the second one is called in an array, so its the usual map function
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
        // allows execute this function in place w/o altering the data
      )
      // .subscribe((recipes) => {
      // });
      // Angular dont know which type recipes is, so we need to inform that into the get function
      // type <Recipe[]> is imported from recipe model
  }
}
