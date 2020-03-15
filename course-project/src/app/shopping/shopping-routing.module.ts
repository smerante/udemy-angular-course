

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from '../shopping/shopping-list/shopping-list.component';


const shoppingRoutes: Routes = [
  { path: '', component: ShoppingListComponent },
];

@NgModule({
  imports: [//must only call forRoot in your app module, anywhere else you must use for child
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}