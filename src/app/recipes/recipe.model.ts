import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
   // public - exposes the keys outside of the model
   // and that is how assign string in TypeScript property : type;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
