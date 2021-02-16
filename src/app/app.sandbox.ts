import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { AppService } from "./app.service";
import { User } from "./core/models/user";
@Injectable()
export class AppSandbox {

    constructor(
        private appService: AppService
    ) { }

    fetchAllUsers() {
        return this.appService.getAllUsers();
    }

    onCreateUser(users: User[], user: User) {
        return of([...users, user]);
    }

    onUpdateUser(users: User[], user: User) {
        var index = users.findIndex(u => u.id === user.id);
        users[index] = user;
        return of([...users]);
    }

}