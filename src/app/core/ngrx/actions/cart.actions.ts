import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product";

//CART ACTIONS
export const Add_Product_In_Cart_Action = createAction(
    '[Cart] Add_Product_In_Cart',
    props<{ product: Product }>()
);

export const Delete_Product_In_Cart_Action = createAction(
    '[Cart] Delete_Product_In_Cart',
    props<{ id: string }>()
);

//ORDER ACTIONS

export const Create_Order_For_Buy_Action = createAction(
    '[Cart] Create_Order_For_Buy'
);

export const Create_Order_For_Buy_Success_Action = createAction(
    '[Cart] Create_Order_For_Buy_Success'
);

export const Create_Order_For_Buy_Error_Action = createAction(
    '[Cart] Create_Order_For_Buy_Error'
);
