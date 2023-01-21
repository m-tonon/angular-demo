import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
    { path:'', component: RecipeStartComponent },
    { path:':id', component: RecipeDetailComponent }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {}
