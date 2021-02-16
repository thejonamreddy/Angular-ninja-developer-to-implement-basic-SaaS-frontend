import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user";
import { UserUpdate } from "../../models/user-update";

export const createUserAction = createAction(
    '[Users] Create user',
    props<{ user: UserUpdate }>()
);

export const createUserSuccessAction = createAction(
    '[Users] Create user Success',
    props<{ payload: User }>()
);

export const createUserFailureAction = createAction(
    '[Users] Create user Failure',
    props<{ payload: any }>()
);