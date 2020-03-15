import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { NgForm } from "@angular/forms";
import { Ingredient } from "../../shared/ingredient.modal";
import { Subscription } from "rxjs";

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode = false;
  editIndex: number;
  editedItem: Ingredient;
  @ViewChild('form') shoppingForm: NgForm;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.shoppingForm.setValue(
          {
            name: this.editedItem.name,
            amount: this.editedItem.amount
          }
        )
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  onClear(){
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.onClear();
    this.slService.deleteIngredient(this.editIndex);
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editIndex,newIngredient);
    }
    else{
      this.slService.addedIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
}