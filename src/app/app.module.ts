import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './component/shoppinglist/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './component/shoppinglist/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './component/recipebook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './component/recipebook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './component/recipebook/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './component/recipebook/recipes/recipes.component';
import { ShoppingListItemComponent } from './component/shoppinglist/shopping-list-item/shopping-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    ShoppingListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
