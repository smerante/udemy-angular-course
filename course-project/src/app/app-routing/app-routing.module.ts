import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from '../core/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: '../recipe/recipes.module#RecipesModule' },
  { path: 'shopping-list', loadChildren: '../shopping/shopping-list.module#ShoppingListModule' },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
