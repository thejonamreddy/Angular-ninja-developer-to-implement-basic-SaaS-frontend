import { createReducer, on } from "@ngrx/store";
import { Country } from "../../models/country";
import * as countriesActions from "../actions/countries.actions";

export interface CountriesState {
    loading: boolean,
    error: any,
    list: Country[]
}

export const initialState: CountriesState = {
    loading: false,
    error: null,
    list: []
};

export const countriesReducer = createReducer(
    initialState,
    on(countriesActions.getAllCountriesAction, (state) => {
        return ({
            ...state,
            loading: true,
            error: null,
            list: []
        });
    }),
    on(countriesActions.getAllCountriesSuccessAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: null,
            list: payload
        });
    }),
    on(countriesActions.getAllCountriesFailureAction, (state, { payload }) => {
        return ({
            ...state,
            loading: false,
            error: payload,
            list: []
        });
    })
);