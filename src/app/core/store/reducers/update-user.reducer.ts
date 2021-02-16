import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user";
import * as updateUserActions from "../actions/update-user.actions";

export interface UpdateUserState {
    loading: boolean,
    error: any,
    entity: User | null
}

export const initialState: UpdateUserState = {
    loading: false,
    error: null,
    entity: null
}

export const updateUserReducer = createReducer(
    initialState,
    on(updateUserActions.updateUserAction, (state) => {
        return ({
            ...state,
            loading: true,
            error: null,
            entity: null
        });
    }),
    on(updateUserActions.updateUserSuccessAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: null,
            entity: payload
        });
    }),
    on(updateUserActions.updateUserFailureAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: payload,
            entity: null
        });
    })
);