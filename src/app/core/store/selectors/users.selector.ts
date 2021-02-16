import { createSelector } from "@ngrx/store";
import { getUsersState } from "../app.state";
import { UsersState } from "../reducers/users.reducer";

export const getUsers = createSelector(getUsersState, (state: UsersState) => state.list);