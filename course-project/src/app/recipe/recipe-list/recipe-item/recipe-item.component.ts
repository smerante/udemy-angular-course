import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: Number;
  constructor() { }

  ngOnInit() {
  }
}
