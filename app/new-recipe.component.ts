import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
  <h1>New Recipe</h1>
  <div>
    <div>
     <label>Enter Recipe Title:</label>
     <input #newTitle>
    </div>
    <div>
      <label>Enter Recipe Ingredients:</label>
      <input #newIngredients>
    </div>
    <div>
      <label>Enter Recipe Instructions:</label>
      <input #newInstructions>
    </div>
    <div>
    <label>Choose Recipe Meal:</label>
    <select #newMeal>
    <option value="Breakfast"> Breakfast </option>
    <option value="Lunch"> Lunch </option>
    <option value="Dinner"> Dinner </option>
    <option value="Desert"> Desert </option>
    </select>
    </div>
    <button (click)="submitForm(newTitle.value, newIngredients.value, newInstructions.value, newMeal.value); newTitle.value=''; newInstructions.value=''; newIngredients.value='';">Add</button>
  </div>
  `
})

export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, ingredients: string, instructions: string, meal: string) {
    var newRecipeToAdd: Recipe = new Recipe(title, ingredients, instructions, meal);
    console.log(newRecipeToAdd);
    this.newRecipeSender.emit(newRecipeToAdd);
  }
}
