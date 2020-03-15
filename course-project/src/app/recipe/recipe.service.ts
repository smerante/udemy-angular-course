import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';
import { Subject } from 'rxjs';

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe('Schnitzel',
      'Super tasty Shnitzel',
      'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Burger',
      'This is super tasty burger',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1),
      ])
  ];

  constructor() { }
  public replaceRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  public getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  public updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  public deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
