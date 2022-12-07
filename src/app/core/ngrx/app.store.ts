import { ActionReducerMap } from "@ngrx/store"
import { authReducer } from "./reducers/auth.reducer"

export const ROOT_REDUCERS: ActionReducerMap<AppStore> = {
    auth: authReducer
};

export interface AppStore {
    auth: AuthState
};

export interface AuthState {
    token: string | null
};