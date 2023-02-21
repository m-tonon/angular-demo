import { Action } from "@ngrx/store";

import { Ingredient } from "../../shared/ingredient.model";
import { ADD_INGREDIENT } from "./shopping-list.actions";

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
}

export function shoppingListReducer (state = initialState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        // spread the content of the state into a new JS Object (a copy).
        ingredients: [...state.ingredients, action]
      };
  }
}
