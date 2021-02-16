import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user";
import * as usersActions from "../actions/users.actions";

export interface UsersState {
    loading: boolean,
    error: any,
    list: User[]
}

export const initialState: UsersState = {
    loading: false,
    error: null,
    list: []
}

export const usersReducer = createReducer(
    initialState,
    on(usersActions.getAllUsersAction, (state) => {
        return ({
            ...state,
            loading: true,
            error: null,
            list: []
        });
    }),
    on(usersActions.getAllUsersSuccessAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: null,
            list: payload
        });
    }),
    on(usersActions.getAllUsersFailureAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: payload,
            list: []
        });
    }),
    on(usersActions.addUserToListAction, (state, { payload }) => {
        return ({
            ...state,
            list: [...state.list, payload]
        });
    }),
    on(usersActions.updateUserInListAction, (state, { payload }) => {
        var index = state.list.findIndex(user => {
            return user.id === payload.id
        });
        var list = [...state.list];
        list[index] = payload;
        return ({
            ...state,
            list: [...list]
        });
    })
);