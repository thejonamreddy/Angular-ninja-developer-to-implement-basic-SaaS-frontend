import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getAllUsersAction } from "./core/store/actions/users.actions";
import { AppState } from "./core/store/app.state";
import { getUsers } from "./core/store/selectors/users.selector";

@Injectable()
export class AppSandbox {

    users$ = this.store.pipe(select(getUsers));

    constructor(
        private store: Store<AppState>
    ) { }

    fetchAllUsers() {
        this.store.dispatch(getAllUsersAction());
    }

}