import { createSelector } from "@ngrx/store";
import { getCountriesState } from "../app.state";
import { CountriesState } from "../reducers/countries.reducer";

export const getCountries = createSelector(getCountriesState, (state: CountriesState) => state.list);