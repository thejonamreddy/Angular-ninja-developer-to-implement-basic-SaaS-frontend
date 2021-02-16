import { createSelector } from "@ngrx/store";
import { getCreateUserState } from "../app.state";
import { CreateUserState } from "../reducers/create-user.reducer";

export const getCreateUser = createSelector(getCreateUserState, (state: CreateUserState) => state.entity);