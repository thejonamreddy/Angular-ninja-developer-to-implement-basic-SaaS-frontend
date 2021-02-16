import { createAction, props } from "@ngrx/store";
import { UserUpdate } from "../../models/user-update";

export const getUserAction = createAction(
    '[Users] Get user',
    props<{ userId: number }>()
);

export const getUserSuccessAction = createAction(
    '[Users] Get user Success',
    props<{ payload: UserUpdate }>()
);

export const getUserFailureAction = createAction(
    '[Users] Get user Failure',
    props<{ payload: any }>()
);