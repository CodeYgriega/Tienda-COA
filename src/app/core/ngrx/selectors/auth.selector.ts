import { createSelector } from "@ngrx/store";
import { AppStore, AuthState } from "../app.store";

export const selectAuthFeature = (state: AppStore) => state.auth;

export const selectToken = createSelector(
    selectAuthFeature, (state: AuthState) => state.token
);