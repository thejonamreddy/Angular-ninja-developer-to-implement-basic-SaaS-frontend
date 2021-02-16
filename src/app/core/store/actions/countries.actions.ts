import { createAction, props } from "@ngrx/store";
import { Country } from "../../models/country";

export const getAllCountriesAction = createAction(
    '[Countries] Get all countries'
);

export const getAllCountriesSuccessAction = createAction(
    '[Countries] Get all countries Success',
    props<{ payload: Country[] }>()
);

export const getAllCountriesFailureAction = createAction(
    '[Countries] Get all countries Failure',
    props<{ payload: any }>()
);