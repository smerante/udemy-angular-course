import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping/shopping-list/shopping-list.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  selectedRecipe: Recipe;
  constructor(private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  ngOnInit() {
  }
  onEdit() {
    // this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route });
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
  addToList() {
    this.slService.addIngredients(this.selectedRecipe.ingredients);
  }

}
