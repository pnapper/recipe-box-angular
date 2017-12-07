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
    <h2 *ngFor="let currentRecipe of childRecipeList | meal:filterByMeal" (click)="showDetails(currentRecipe)"><strong>{{currentRecipe.title}}</strong>
    </h2>

    <div *ngIf="currentRecipe">
    <hr>
      <ul>
        <li (click)="hideDetails(currentRecipe)">
      <div><strong>Title: {{currentRecipe.title}}</strong></div> <button (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button>
        <div>Ingredients: {{currentRecipe.ingredients}}</div>  <div>Instructions: {{currentRecipe.instructions}}</div>
        <div>Meal: {{currentRecipe.meal}}</div>
        </li><br><br>
      </ul>
    </div>
  `
})

export class RecipeListComponent {

  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  filterByMeal: string = "";
  currentRecipe = null;

  showDetails(clickedRecipe) {
  this.currentRecipe = clickedRecipe;
  }

  hideDetails(clickedRecipe) {
  this.currentRecipe = null;
  }

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
