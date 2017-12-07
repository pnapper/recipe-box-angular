import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>{{currentFocus}}</h3>
    <recipe-list [childRecipeList]="masterRecipeList" (clickSender)="editRecipe($event)"></recipe-list>
    <hr>
    <edit-recipe [childSelectedRecipe]="selectedRecipe" (doneButtonClickedSender)="finishedEditing()"></edit-recipe>
    <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Recipes';
  selectedRecipe = null;

  masterRecipeList: Recipe[] = [
    new Recipe("Chocolate Chip Cookies", "1 cup butter, 1 cup sugar, 1 cup brown sugar, 2 eggs, 2 tsp vanilla, 3 cups flour, 1 tsp baking soda, 1/2 tsp salt, 2 cups chocolate chips", "Preheat oven to 350 degrees. Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.", "Desert"),

    new Recipe("Juicy Thanksgiving Turkey", "2 tbs dried parlsley, 2 tbs dried rosemary, 2 tbs rubbed dry sage, 2 tbs dried thyme leaves, 1 tbs lemon pepper, 1 tbs salt, 1 (15 pound) turkey", "Preheat oven to 350 degrees. Line a turkey roaster with long sheets of aluminum foil that will be long enough to wrap over the turkey. Stir together the parsley, rosemary, sage, thyme, lemon pepper, and salt in a small bowl. Rub the herb mixture into the cavity of the turkey, then stuff with the celery, orange, onion, and carrot. Truss if desired, and place the turkey into the roasting pan. Pour the chicken broth and champagne over the turkey, making sure to get some champagne in the cavity. Bring the aluminum foil over the top of the turkey, and seal. Try to keep the foil from touching the skin of the turkey breast or legs. Bake the turkey in the preheated oven for 2 1/2 to 3 hours until no longer pink at the bone and the juices run clear. Uncover the turkey, and continue baking until the skin turns golden brown, 30 minutes to 1 hour longer. An instant-read thermometer inserted into the thickest part of the thigh, near the bone should read 180 degrees F (82 degrees C). Remove the turkey from the oven, cover with a doubled sheet of aluminum foil, and allow to rest in a warm area 10 to 15 minutes before slicing.", "Dinner"),

    new Recipe("French Toast", "1 teaspoon ground cinnamon 1/4 teaspoon ground nutmeg 2 tablespoons sugar 4 tablespoons butter 4 eggs 1/4 cup milk 1/2 teaspoon vanilla extract 8 slices challah, brioche, or white bread 1/2 cup maple syrup, warmed.", "In a small bowl, combine, cinnamon, nutmeg, and sugar and set aside briefly. In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup.", "Breakfast"),
  ];

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  addRecipe(newRecipeFromChild: Recipe) {
    this.masterRecipeList.push(newRecipeFromChild);
  }
}
