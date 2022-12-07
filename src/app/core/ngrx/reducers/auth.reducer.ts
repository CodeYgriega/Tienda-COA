import { createReducer, on } from "@ngrx/store";
import { Login_Request_Success_Action, Logout_Action } from "../actions/auth.actions";
import { AuthState } from "../app.store";

export const initialAuthState: AuthState = {
    token: null
};

export const authReducer = createReducer(initialAuthState, 
    on(Login_Request_Success_Action, (state, {token}) => {
        return {
            ...state,
            token
        }
    }),
    on(Logout_Action, (state) => {
        return {
            ...state,
            token: null
        }
    }))