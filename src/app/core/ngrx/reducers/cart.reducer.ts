import { createReducer, on } from "@ngrx/store";
import { Add_Product_In_Cart_Action, Delete_Product_In_Cart_Action } from "../actions/cart.actions";
import { CartState } from "../app.store";

export const initialCartState: CartState = {
    cart: []
};

export const cartReducer = createReducer(initialCartState, 
    on(Add_Product_In_Cart_Action, (state, {product}) => {
        return {
            cart: [...state.cart, product]
        }
    }),
    on(Delete_Product_In_Cart_Action, (state, {id}) => {
        const newCart = state.cart.filter(item => {
            return item.id !== id;
        });
        return {
            cart: newCart
        }
    }));