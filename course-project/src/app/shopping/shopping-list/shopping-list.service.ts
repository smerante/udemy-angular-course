import { Ingredient } from "../../shared/ingredient.modal";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients(): Ingredient[]{
    return this.ingredients.slice();
  }

  getIngredient(id: number): Ingredient{
   return this.ingredients[id];
  }

  deleteIngredient(id: number){
    this.ingredients.splice(id,1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  
  updateIngredient(id: number, newIngredient: Ingredient){
    this.ingredients[id] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addedIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
