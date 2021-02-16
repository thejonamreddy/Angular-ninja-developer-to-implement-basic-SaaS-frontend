import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AppService } from "../app.service";
import { Country } from "../core/models/country";
import { User } from "../core/models/user";
import { UserUpdate } from "../core/models/user-update";

@Injectable()
export class UserUpdateDialogSandbox {

    constructor(
        private appService: AppService
    ) { }

    fetAllCountries() {
        return this.appService.getAllCountries();
    }

    fetchUser(user: User) {
        return this.appService.getUser(user.id);
    }

    createUser(user: UserUpdate) {
        return this.appService.createUser(user);
    }

    updateUser(user: UserUpdate) {
        return this.appService.updateUser(user);
    }

}