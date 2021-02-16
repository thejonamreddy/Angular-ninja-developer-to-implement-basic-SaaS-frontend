import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "../../../app.service";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { getAllUsersAction, getAllUsersFailureAction, getAllUsersSuccessAction } from "../actions/users.actions";

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private appService: AppService
    ) { }

    getAllUsers$ = createEffect(() => this.actions$.pipe(
        ofType(getAllUsersAction),
        mergeMap(() => this.appService.getAllUsers()
            .pipe(
                map(data => getAllUsersSuccessAction({ payload: data })),
                catchError(error => of(getAllUsersFailureAction({ payload: error }))
                )
            )
        )
    ));

}