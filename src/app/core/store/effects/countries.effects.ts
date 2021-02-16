import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "../../../app.service";
import { getAllCountriesAction, getAllCountriesFailureAction, getAllCountriesSuccessAction } from "../actions/countries.actions";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class CountriesEffects {

    constructor(
        private actions$: Actions,
        private appService: AppService
    ) { }

    getAllCountries$ = createEffect(() => this.actions$.pipe(
        ofType(getAllCountriesAction),
        mergeMap(() => this.appService.getAllCountries()
            .pipe(
                map(data => getAllCountriesSuccessAction({ payload: data })),
                catchError(error => of(getAllCountriesFailureAction({ payload: error }))
                )
            )
        )
    ));

}