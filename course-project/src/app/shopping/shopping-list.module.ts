import {NgModule} from '@angular/core';
import {ShoppingListEditComponent} from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports : [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingListModule {}