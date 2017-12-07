import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'edit-recipe',
  template: `
    <div>
      <div *ngIf="childSelectedRecipe">
        <h3>{{childSelectedRecipe.title}}</h3>
        <p>Recipe Meal: {{childSelectedRecipe.meal}}</p>
        <hr>
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Title:</label>
        <input [(ngModel)]="childSelectedRecipe.title"><br>
        <label>Enter Recipe Ingredients:</label>
        <input [(ngModel)]="childSelectedRecipe.ingredients"><br>
        <label>Enter Recipe Instructions:</label>
        <input [(ngModel)]="childSelectedRecipe.instructions"><br>
        <label>Enter Recipe Meal:</label>
        <select [(ngModel)]="childSelectedRecipe.meal"><br>
          <option value="Breakfast"> Breakfast </option>
          <option value="Lunch"> Lunch </option>
          <option value="Dinner"> Dinner </option>
          <option value="Desert"> Desert </option>
        </select><br>
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditRecipeComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
   this.doneButtonClickedSender.emit();
 }
}
