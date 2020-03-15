import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipeComponent } from '../recipe/recipe.component';

const recipeRoutes: Routes = [
  {
    path: '', component: RecipeComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
    ]
  },
];

@NgModule({
  imports: [//must only call forRoot in your app module, anywhere else you must use for child
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class RecipesRoutingModule {
}