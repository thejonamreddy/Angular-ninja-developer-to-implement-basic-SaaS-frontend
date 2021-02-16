import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserUpdate } from "../core/models/user-update";
import { getAllCountriesAction } from "../core/store/actions/countries.actions";
import { createUserAction } from "../core/store/actions/create-user.actions";
import { updateUserAction } from "../core/store/actions/update-user.actions";
import { getUserAction } from "../core/store/actions/user.actions";
import { AppState } from "../core/store/app.state";
import { getCountries } from "../core/store/selectors/countries.selectors";
import { getUser } from "../core/store/selectors/user.selectors";

@Injectable()
export class UserUpdateDialogSandbox {

    countries$ = this.store.select(getCountries);
    user$ = this.store.select(getUser);

    constructor(
        private store: Store<AppState>
    ) { }

    fetchAllCountries() {
        this.store.dispatch(getAllCountriesAction());
    }

    getUser(userId: number) {
        this.store.dispatch(getUserAction({ userId: userId }));
    }

    createUser(user: UserUpdate) {
        this.store.dispatch(createUserAction({ user: user }));
    }

    updateUser(user: UserUpdate) {
        this.store.dispatch(updateUserAction({ user: user }));
    }

}