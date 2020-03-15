import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { map } from 'rxjs/operators'
import { Recipe } from '../recipe/recipe.modal';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {

    return this.httpClient.put('https://ng-recipe-book-afab5.firebaseio.com/recipes.json',
     this.recipeService.getRecipes(),
     {
      observe: 'body',
      responseType: 'json',
     });
  }

  fetchRecipes() {

    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-afab5.firebaseio.com/recipes.json',
      {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        map(
          (recipes) => {
            for (let recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            this.recipeService.replaceRecipes(recipes);
            return [recipes];
          }
        )
      );
  }

}
