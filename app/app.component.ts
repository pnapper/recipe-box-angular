import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Recipe Box</h1>
  <h3>{{currentFocus}}</h3>
  <ul *ngFor = "let currentRecipe of recipes">
  <h3> {{currentRecipe.title}} </h3><button id="blah">Edit</button>
  <div id="show">
  <input [(ngModel)] = "currentRecipe.title">
  </div>
  <li> {{currentRecipe.ingredients}}</li>
  <li> {{currentRecipe.directions}}</li>
  </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Recipes';

  recipes: Recipe[] = [
    new Recipe("Chocolate Chip Cookies", "1 cup butter, 1 cup sugar, 1 cup brown sugar, 2 eggs, 2 tsp vanilla, 3 cups flour, 1 tsp baking soda, 1/2 tsp salt, 2 cups chocolate chips", "Preheat oven to 350 degrees. Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."),

    new Recipe("Juicy Thanksgiving Turkey", "2 tbs dried parlsley, 2 tbs dried rosemary, 2 tbs rubbed dry sage, 2 tbs dried thyme leaves, 1 tbs lemon pepper, 1 tbs salt, 1 (15 pound) turkey", "Preheat oven to 350 degrees. Line a turkey roaster with long sheets of aluminum foil that will be long enough to wrap over the turkey. Stir together the parsley, rosemary, sage, thyme, lemon pepper, and salt in a small bowl. Rub the herb mixture into the cavity of the turkey, then stuff with the celery, orange, onion, and carrot. Truss if desired, and place the turkey into the roasting pan. Pour the chicken broth and champagne over the turkey, making sure to get some champagne in the cavity. Bring the aluminum foil over the top of the turkey, and seal. Try to keep the foil from touching the skin of the turkey breast or legs. Bake the turkey in the preheated oven for 2 1/2 to 3 hours until no longer pink at the bone and the juices run clear. Uncover the turkey, and continue baking until the skin turns golden brown, 30 minutes to 1 hour longer. An instant-read thermometer inserted into the thickest part of the thigh, near the bone should read 180 degrees F (82 degrees C). Remove the turkey from the oven, cover with a doubled sheet of aluminum foil, and allow to rest in a warm area 10 to 15 minutes before slicing."),
  ];

  // editRecipe(clickedRecipe) {
  //   this.selectedRecipe = clickedRecipe;
  // }

  //
  // finishedEditing() {
  //   this.selectedRecipe = null;
  // }

}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
