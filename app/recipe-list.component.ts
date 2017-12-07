import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="All" selected="selected">All Recipes</option>
      <option value="Breakfast">Breakfast Recipes</option>
      <option value="Lunch">Lunch Recipes</option>
      <option value="Dinner">Dinner Recipes</option>
      <option value="Desert">Desert Recipes</option>
    </select>
  <ul>
    <li *ngFor="let currentRecipe of childRecipeList | meal:filterByMeal"><strong>{{currentRecipe.title}}</strong> <button (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button>
       <div>Ingredients: {{currentRecipe.ingredients}}</div> <div>Instructions: {{currentRecipe.instructions}}</div>
       <div>Meal: {{currentRecipe.meal}}</div><br><br></li>
  </ul>
  `
})

export class RecipeListComponent {

  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  filterByMeal: string = "";

  onChange(optionFromMenu) {
  this.filterByMeal = optionFromMenu;
  }

  editButtonHasBeenClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

  toggleDone(clickedRecipe: Recipe, setMeal: string) {
     clickedRecipe.meal = setMeal;
  }
}
