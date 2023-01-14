import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/30/32/45/tKqC3hipQA2MRyTEsneh_oven-bbq-ribs-02757.jpg',
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

  getRecipes() {
    return this.recipes.slice();
    // with slice it makes a 'copy' of the array so the recipe stored cant be accessed
  }

}
