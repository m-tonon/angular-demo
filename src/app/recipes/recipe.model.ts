export class Recipe {
   // public - exposes the keys outside of the model
   // and that is how assign string in TypeScript property : type;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}