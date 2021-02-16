import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user";
import * as createUserActions from "../actions/create-user.actions";

export interface CreateUserState {
    loading: boolean,
    error: any,
    entity: User | null
}

export const initialState: CreateUserState = {
    loading: false,
    error: null,
    entity: null
}

export const createUserReducer = createReducer(
    initialState,
    on(createUserActions.createUserAction, (state) => {
        return ({
            ...state,
            loading: true,
            error: null,
            entity: null
        });
    }),
    on(createUserActions.createUserSuccessAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: null,
            entity: payload
        });
    }),
    on(createUserActions.createUserFailureAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: payload,
            entity: null
        });
    })
);