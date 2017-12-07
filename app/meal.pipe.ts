import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './recipe.model';

@Pipe({
  name: "meal",
  pure: false
})

export class MealPipe implements PipeTransform {
  transform(input: Recipe[], desiredMeal) {
    var output: Recipe[] = [];
    if(desiredMeal === "Breakfast") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].meal === "Breakfast") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMeal === "Lunch") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].meal === "lunchRecipes") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMeal === "Dinner") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].meal === "Dinner") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMeal === "Desert") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].meal === "Desert") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
