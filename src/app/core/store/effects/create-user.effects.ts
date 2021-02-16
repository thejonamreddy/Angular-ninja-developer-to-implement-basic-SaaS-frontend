import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "../../../app.service";
import { mergeMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { createUserAction, createUserFailureAction, createUserSuccessAction } from "../actions/create-user.actions";
import { addUserToListAction } from "../actions/users.actions";

@Injectable()
export class CreateUserEffects {

    constructor(
        private actions$: Actions,
        private appService: AppService
    ) { }

    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(createUserAction),
        mergeMap(action => this.appService.createUser(action.user)
            .pipe(
                mergeMap(data => {
                    return [
                        createUserSuccessAction({ payload: data }),
                        addUserToListAction({ payload: data })
                    ];
                }),
                catchError(error => of(createUserFailureAction({ payload: error }))
                )
            )
        )
    ));

}