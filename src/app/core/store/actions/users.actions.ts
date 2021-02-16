import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user";

export const getAllUsersAction = createAction(
    '[Users] Get all users'
);

export const getAllUsersSuccessAction = createAction(
    '[Users] Get all users Success',
    props<{ payload: User[] }>()
);

export const getAllUsersFailureAction = createAction(
    '[Users] Get all users Failure',
    props<{ payload: any }>()
);

export const addUserToListAction = createAction(
    '[Users] Add user to list',
    props<{ payload: User }>()
);

export const updateUserInListAction = createAction(
    '[Users] Update user in list',
    props<{ payload: User }>()
);