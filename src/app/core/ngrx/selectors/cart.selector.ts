import { createSelector } from "@ngrx/store";
import { AppStore, CartState } from "../app.store";

export const selectCartFeature = (state: AppStore) => state.cart;

export const selectCart = createSelector(
    selectCartFeature, (state: CartState) => state.cart
);