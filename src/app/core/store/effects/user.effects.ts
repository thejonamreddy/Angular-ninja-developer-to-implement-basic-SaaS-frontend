import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "../../../app.service";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { getUserAction, getUserFailureAction, getUserSuccessAction } from "../actions/user.actions";

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private appService: AppService
    ) { }

    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(getUserAction),
        mergeMap(action => this.appService.getUser(action.userId)
            .pipe(
                map(data => getUserSuccessAction({ payload: data })),
                catchError(error => of(getUserFailureAction({ payload: error }))
                )
            )
        )
    ));

}