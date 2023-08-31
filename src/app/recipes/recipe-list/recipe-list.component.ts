import { Component } from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe('Hamburger', 'Kawaii CAfe Burger', 'https://bembumkitchenhome.files.wordpress.com/2022/01/dscf8465b.jpg'),
    new Recipe('Bento Lunch', 'Cute Lunch', 'https://www.kawaii-cooking.com/assets/img/top_img09.jpg'),
    new Recipe('Ice Cream', 'Panda Cream', 'https://thepandanerd.files.wordpress.com/2015/09/kawaii-food-large-msg-134581664731.jpg')
  ];
}
