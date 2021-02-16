import { createReducer, on } from "@ngrx/store";
import { UserUpdate } from "../../models/user-update";
import * as userActions from "../actions/user.actions";

export interface UserState {
    loading: boolean,
    error: any,
    entity: UserUpdate | null
}

export const initialState: UserState = {
    loading: false,
    error: null,
    entity: null
}

export const userReducer = createReducer(
    initialState,
    on(userActions.getUserAction, (state) => {
        return ({
            ...state,
            loading: true,
            error: null,
            entity: null
        });
    }),
    on(userActions.getUserSuccessAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: null,
            entity: payload
        });
    }),
    on(userActions.getUserFailureAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: payload,
            entity: null
        });
    })
);