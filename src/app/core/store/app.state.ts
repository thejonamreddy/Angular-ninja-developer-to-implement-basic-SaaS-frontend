import { CountriesState } from "./reducers/countries.reducer";
import { CreateUserState } from "./reducers/create-user.reducer";
import { UpdateUserState } from "./reducers/update-user.reducer";
import { UserState } from "./reducers/user.reducer";
import { UsersState } from "./reducers/users.reducer";

export interface AppState {
    countries: CountriesState;
    users: UsersState;
    user: UserState;
    createUser: CreateUserState;
    updateUser: UpdateUserState;
}

export const getCountriesState = (state: AppState) => state.countries;
export const getUsersState = (state: AppState) => state.users;
export const getUserState = (state: AppState) => state.user;
export const getCreateUserState = (state: AppState) => state.createUser;
export const getUpdateUserState = (state: AppState) => state.updateUser;