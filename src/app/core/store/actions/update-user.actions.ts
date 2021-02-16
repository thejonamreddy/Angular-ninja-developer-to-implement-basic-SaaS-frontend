import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user";
import { UserUpdate } from "../../models/user-update";

export const updateUserAction = createAction(
    '[Users] Update user',
    props<{ user: UserUpdate }>()
);

export const updateUserSuccessAction = createAction(
    '[Users] Update user Success',
    props<{ payload: User }>()
);

export const updateUserFailureAction = createAction(
    '[Users] Update user Failure',
    props<{ payload: any }>()
);