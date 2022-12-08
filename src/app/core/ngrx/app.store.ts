import { ActionReducerMap } from "@ngrx/store"
import { Product } from "../models/product";
import { authReducer } from "./reducers/auth.reducer"
import { cartReducer } from "./reducers/cart.reducer";

export const ROOT_REDUCERS: ActionReducerMap<AppStore> = {
    auth: authReducer,
    cart: cartReducer
};

export interface AppStore {
    auth: AuthState
    cart: CartState
};

export interface AuthState {
    token: string | null
};

export interface CartState {
    cart: Product[]
};