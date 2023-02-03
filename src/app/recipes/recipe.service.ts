import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>;

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.sndimg.com/food/image/upload/img/recipes/30/32/45/tKqC3hipQA2MRyTEsneh_oven-bbq-ribs-02757.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 5)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is  simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Onion', 1),
        new Ingredient('Garlic clove', 4),
        new Ingredient('Egg', 6)
      ])
  ];

  constructor (private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
    // with slice it makes a 'copy' of the array so the recipe stored cant be accessed
  }

  getRecipe(index: number) {
    return this.recipes[index]; // index will be our id
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsToShoppingList(ingredients);
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
