import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipeComponent } from "./recipe.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from "../shared/shared.module";
@NgModule({
  declarations: [
    RecipeComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
  imports: [ 
    CommonModule, //Gives access to common directives, ng-class, ng-for, ng-if
    ReactiveFormsModule,
    SharedModule,
    RecipesRoutingModule // Need to create seperate routing for a module that has nested router-outlet directive
  ]
})
export class RecipesModule{

}