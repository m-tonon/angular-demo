import { Recipe } from "./recipe.model";

export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/30/32/45/tKqC3hipQA2MRyTEsneh_oven-bbq-ribs-02757.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is  simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
    // with slice it makes a 'copy' of the array so the recipe stored cant be accessed
  }

}
