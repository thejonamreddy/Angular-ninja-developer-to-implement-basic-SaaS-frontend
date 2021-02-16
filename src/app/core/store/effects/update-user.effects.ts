import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "../../../app.service";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { updateUserAction, updateUserFailureAction, updateUserSuccessAction } from "../actions/update-user.actions";
import { updateUserInListAction } from "../actions/users.actions";

@Injectable()
export class UpdateUserEffects {

    constructor(
        private actions$: Actions,
        private appService: AppService
    ) { }

    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(updateUserAction),
        mergeMap(action => this.appService.updateUser(action.user)
            .pipe(
                mergeMap(data => {
                    return [
                        updateUserSuccessAction({ payload: data }),
                        updateUserInListAction({ payload: data })
                    ];
                }),
                catchError(error => of(updateUserFailureAction({ payload: error }))
                )
            )
        )
    ));

}