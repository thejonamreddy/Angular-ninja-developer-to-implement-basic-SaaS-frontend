import { createSelector } from "@ngrx/store";
import { getUpdateUserState } from "../app.state";
import { UpdateUserState } from "../reducers/update-user.reducer";

export const getUpdateUser = createSelector(getUpdateUserState, (state: UpdateUserState) => state.entity);