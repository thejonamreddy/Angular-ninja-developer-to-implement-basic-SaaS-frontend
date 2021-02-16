import { createSelector } from "@ngrx/store";
import { getUserState } from "../app.state";
import { UserState } from "../reducers/user.reducer";

export const getUser = createSelector(getUserState, (state: UserState) => state.entity);