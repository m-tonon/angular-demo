import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>;

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe',
  //     'This is simply a test',
  //     'https://img.sndimg.com/food/image/upload/img/recipes/30/32/45/tKqC3hipQA2MRyTEsneh_oven-bbq-ribs-02757.jpg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Potato', 5)
  //     ]),
  //   new Recipe(
  //     'Another Test Recipe',
  //     'This is  simply a test',
  //     'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
  //     [
  //       new Ingredient('Onion', 1),
  //       new Ingredient('Garlic clove', 4),
  //       new Ingredient('Egg', 6)
  //     ])
  // ];

  // --> with recipes stored into firebase we dont need it anymore
  private recipes: Recipe[] = [];

  constructor (
    private store: Store<fromShoppingList.AppState>
    ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
    // with slice it makes a 'copy' of the array so the recipe stored cant be accessed
  }

  getRecipe(index: number) {
    return this.recipes[index]; // index will be our id
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.shoppingListService.addIngredientsToShoppingList(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number ) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
